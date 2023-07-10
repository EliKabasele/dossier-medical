import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-medical',
  templateUrl: './formulaire-medical.component.html',
  styleUrls: ['./formulaire-medical.component.scss'],
})
export class FormulaireMedicalComponent implements OnInit {
  medicalForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initMedicalForm();
  }

  onSubmitForm() {
    console.log(this.medicalForm.value);
  }

  goBack() {
    this.router.navigate(['/liste-dossiers']);
  }

  private initMedicalForm(): void {
    // Identification
    let nomDuPatient = '';
    let prenomDuPatient = '';
    let dateDuNaissanceDePatient = '';
    let lieuDuNaissanceDePatient = '';
    let ethnieDuPatient = '';
    let lieuDuResidenceDePatient = '';
    let professionDuPatient = '';
    let contactPersonDuPatient = '';

    // IdentiAntecedentsfication
    let antecedentsMedicaux = '';
    let antecedentsChirurgicaux = '';
    let antecedentsImmunoAllergics = '';
    let antecedentToxicologics = '';
    let antecedentsFamiliaux = '';

    let histoireMaladieDuPatient = '';
    let examenPhysicDuPatient = '';
    let hypotheseDiagnosticDuPatient = '';
    let bilanRadiologicDuPatient = '';
    let bilanBiologicDuPatient = '';
    let diagnosticRetenuDuPatient = '';
    let traitementDuPatient = '';

    this.medicalForm = new FormGroup({
      identification: new FormGroup({
        nom: new FormControl(nomDuPatient, Validators.required),
        prenom: new FormControl(prenomDuPatient, Validators.required),
        dateDeNaissance: new FormControl(
          dateDuNaissanceDePatient,
          Validators.required
        ),
        lieuDeNaissance: new FormControl(
          lieuDuNaissanceDePatient,
          Validators.required
        ),
        ethnie: new FormControl(ethnieDuPatient),
        profession: new FormControl(professionDuPatient),
        lieuDeResidence: new FormControl(
          lieuDuResidenceDePatient,
          Validators.required
        ),
        contactPerson: new FormControl(
          contactPersonDuPatient,
          Validators.required
        ),
      }),

      antecedents: new FormGroup({
        medicaux: new FormControl(antecedentsMedicaux),
        chirurgicaux: new FormControl(antecedentsChirurgicaux),
        immunoAllergics: new FormControl(antecedentsImmunoAllergics),
        toxicologics: new FormControl(antecedentToxicologics),
        familiaux: new FormControl(antecedentsFamiliaux),
      }),

      histoireMaladie: new FormControl(histoireMaladieDuPatient),
      examenPhysic: new FormControl(examenPhysicDuPatient),
      hypotheseDiagnostic: new FormControl(hypotheseDiagnosticDuPatient),
      bilanRadiologic: new FormControl(bilanRadiologicDuPatient),
      bilanBiologic: new FormControl(bilanBiologicDuPatient),
      diagnosticRetenu: new FormControl(diagnosticRetenuDuPatient),
      traitement: new FormControl(traitementDuPatient),
    });
  }
}
