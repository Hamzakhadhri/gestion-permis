import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerConducteurComponent } from './lister-conducteur.component';

describe('ListerConducteurComponent', () => {
  let component: ListerConducteurComponent;
  let fixture: ComponentFixture<ListerConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerConducteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
