import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPermisComponent } from './ajouter-permis.component';

describe('AjouterPermisComponent', () => {
  let component: AjouterPermisComponent;
  let fixture: ComponentFixture<AjouterPermisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPermisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPermisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
