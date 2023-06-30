import { Component } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'doPa-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
})
export class DashboardHomeComponent {
  constructor(private router: Router) {}

  nagigateTo(pathToNavigate: string) {
    this.router.navigate(['/' + pathToNavigate]);
  }
}
