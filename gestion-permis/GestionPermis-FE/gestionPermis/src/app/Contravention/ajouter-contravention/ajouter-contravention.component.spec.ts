import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContraventionComponent } from './ajouter-contravention.component';

describe('AjouterContraventionComponent', () => {
  let component: AjouterContraventionComponent;
  let fixture: ComponentFixture<AjouterContraventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterContraventionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterContraventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
