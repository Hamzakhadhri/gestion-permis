import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerContraventionComponent } from './lister-contravention.component';

describe('ListerContraventionComponent', () => {
  let component: ListerContraventionComponent;
  let fixture: ComponentFixture<ListerContraventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerContraventionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerContraventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
