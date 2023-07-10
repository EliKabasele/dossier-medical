import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DossierMedical } from 'src/app/shared/interfaces/dossier-medical';
import { DossierMedicalService } from 'src/app/shared/services/dossier-medical.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dossier-liste',
  templateUrl: './dossier-liste.component.html',
  styleUrls: ['./dossier-liste.component.scss'],
})
export class DossierListeComponent implements OnInit, OnDestroy {
  dossierMedicaux!: DossierMedical[];
  subscription: Subscription;
  selectedDossier!: DossierMedical;

  constructor(
    private dossierMedicalService: DossierMedicalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.dossierMedicalService
      .getDossiersMedicaux()
      .subscribe((result) => {
        this.dossierMedicaux = result;
      });
  }
  onAddNewDossier() {
    this.router.navigate(['formulaire-medical']);
  }

  onModifieRow(index: number) {
    console.log('MODIFIER: ', index + 1);
  }

  onDeleteRow(index: number) {
    console.log('EFFACER: ', index + 1);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
