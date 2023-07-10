import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Components-module
import { AppComponent } from './app.component';
import { FormulaireMedicalComponent } from './dossier-medical/formulaire-medical/formulaire-medical.component';
import { DossierListeComponent } from './dossier-medical/dossier-liste/dossier-liste.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderMenuComponent } from './shared/components/header-menu/header-menu.component';
import { MenubarModule } from 'primeng/menubar';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// primeng-Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireMedicalComponent,
    DossierListeComponent,
    DashboardHomeComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMenuComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // primeng-Modules
    CardModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    MenubarModule,
    DividerModule,
    CheckboxModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
