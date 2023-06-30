import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierMedecinComponent } from './calendrier-medecin.component';

describe('CalendrierMedecinComponent', () => {
  let component: CalendrierMedecinComponent;
  let fixture: ComponentFixture<CalendrierMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendrierMedecinComponent]
    });
    fixture = TestBed.createComponent(CalendrierMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
