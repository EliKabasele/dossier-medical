import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireMedicalComponent } from './dossier-medical/formulaire-medical/formulaire-medical.component';
import { DossierListeComponent } from './dossier-medical/dossier-liste/dossier-liste.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { CalendrierMedecinComponent } from './calendrier/calendrier-medecin/calendrier-medecin.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardHomeComponent,
  },
  {
    path: 'liste-dossiers',
    component: DossierListeComponent,
  },
  {
    path: 'formulaire-medical',
    component: FormulaireMedicalComponent,
  },
  {
    path: 'calendrier-medecin',
    component: CalendrierMedecinComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
