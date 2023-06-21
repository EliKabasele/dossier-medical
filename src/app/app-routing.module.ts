import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireMedicalComponent } from './dossier-medical/formulaire-medical/formulaire-medical.component';
import { DossierListeComponent } from './dossier-medical/dossier-liste/dossier-liste.component';
import { HomeComponent } from './dossier-medical/Dashboard/home/home.component';
import { HeaderComponent } from './dossier-medical/Dashboard/header/header.component';
import { DashboardComponent } from './dossier-medical/Dashboard/dashboard/dashboard.component';
import { SidenavComponent } from './dossier-medical/Dashboard/sidenav/sidenav.component';


const routes: Routes = [
  
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
    
  },
  {
    path: 'liste-dossiers',
    component: DossierListeComponent,
  },
  {
    path: 'formulare-medical',
    component: FormulaireMedicalComponent,
  }
  ,
  {
    path: 'home',
    component: HomeComponent,
  },   
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
