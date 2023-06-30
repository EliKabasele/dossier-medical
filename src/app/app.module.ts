import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireMedicalComponent } from './dossier-medical/formulaire-medical/formulaire-medical.component';
import { DossierListeComponent } from './dossier-medical/dossier-liste/dossier-liste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// primeng-Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderMenuComponent } from './shared/header-menu/header-menu.component';
import { MenubarModule } from 'primeng/menubar';
import { CalendrierMedecinComponent } from './calendrier/calendrier-medecin/calendrier-medecin.component';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';


// Firebase-SDK
import firebase from 'firebase/compat/app'; // Firebase-Import
import 'firebase/compat/auth'; // Firebase-Authentifizierungsimport
import 'firebase/compat/firestore'; // Firestore-Import

// Importieren Sie andere Firebase-Module, die Sie verwenden möchten
// Konfigurationsdaten für Ihre Firebase-App
const firebaseConfig = {
  apiKey: "AIzaSyCdeFNYk6JVyxsJx5qvp0KJKZpumvldElY",
  authDomain: "dopa-55d0f.firebaseapp.com",
  projectId: "dopa-55d0f",
  storageBucket: "dopa-55d0f.appspot.com",
  messagingSenderId: "751217523855",
  appId: "1:751217523855:web:7ff3be75e6aac7de7b84fa",
  measurementId: "G-FYV5GB8RW1"
};

// Firebase initialisieren
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    FormulaireMedicalComponent,
    DossierListeComponent,
    DashboardHomeComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMenuComponent,
    CalendrierMedecinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    

    // primeng-Modules
    CardModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    MenubarModule,
    CalendarModule,
    TableModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
