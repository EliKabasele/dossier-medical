import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireMedicalComponent } from './dossier-medical/formulaire-medical/formulaire-medical.component';
import { DossierListeComponent } from './dossier-medical/dossier-liste/dossier-liste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';




// primeng-Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { HeaderComponent } from './dossier-medical/Dashboard/header/header.component';
import { SidenavComponent } from './dossier-medical/Dashboard/sidenav/sidenav.component';
import { HomeComponent } from './dossier-medical/Dashboard/home/home.component';
import { DashboardComponent } from './dossier-medical/Dashboard/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    FormulaireMedicalComponent,
    DossierListeComponent,
    HeaderComponent,SidenavComponent,HomeComponent,DashboardComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MenubarModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,

    // primeng-Modules
    CardModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
exports: [HeaderComponent, SidenavComponent, HomeComponent, DashboardComponent],})
export class AppModule {}
