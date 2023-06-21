import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireMedicalComponent } from './dossier-medical/formulaire-medical/formulaire-medical.component';
import { DossierListeComponent } from './dossier-medical/dossier-liste/dossier-liste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    FormulaireMedicalComponent,
    DossierListeComponent,
    DashboardHomeComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // primeng-Modules
    CardModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
