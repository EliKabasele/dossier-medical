import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  onButtonClick(event: MouseEvent) {
    const targetElement = event.target as HTMLButtonElement;
    const link = targetElement.getAttribute('ng-reflect-router-link');
    console.log('Clicked link:', link);
  }
}
