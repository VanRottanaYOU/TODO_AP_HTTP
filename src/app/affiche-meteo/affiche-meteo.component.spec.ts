import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheMeteoComponent } from './affiche-meteo.component';

describe('AfficheMeteoComponent', () => {
  let component: AfficheMeteoComponent;
  let fixture: ComponentFixture<AfficheMeteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheMeteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
