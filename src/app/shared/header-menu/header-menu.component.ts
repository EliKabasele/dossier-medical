import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'doPa-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {
  items: MenuItem[];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = initialiseItemElements();
  }

  connect(event: any) {
    // Logik für die Anmeldung
    console.log('Anmeldung');
    this.router.navigate(['signin']);
  }

  disconnect(event: any) {
    // Logik für die Abmeldung
    console.log('Abmeldung');
  }
}
function initialiseItemElements(): MenuItem[] {
  return [
    {
      label: 'DoPa',
      icon: 'pi pi-fw pi-slack',
      style: { 'font-size': '2.5rem' },
      iconStyle: { 'font-size': '2.5rem', color: 'var(--primary-color)' },
      routerLink: 'dashboard',
    },
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      style: { 'font-size': '1.5rem' },
      iconStyle: { 'font-size': '1.5rem' },
      routerLink: 'dashboard',
    },
    {
      label: 'A propos',
      icon: 'pi pi-fw pi-question-circle',
      style: { 'font-size': '1.5rem' },
      iconStyle: { 'font-size': '1.5rem' },
      routerLink: 'formulaire-medical',
    },
  ];
}
