import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterConducteurComponent } from './ajouter-conducteur.component';

describe('AjouterConducteurComponent', () => {
  let component: AjouterConducteurComponent;
  let fixture: ComponentFixture<AjouterConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterConducteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
