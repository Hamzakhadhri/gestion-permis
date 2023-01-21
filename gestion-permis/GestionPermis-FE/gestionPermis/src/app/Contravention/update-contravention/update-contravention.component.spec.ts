import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContraventionComponent } from './update-contravention.component';

describe('UpdateContraventionComponent', () => {
  let component: UpdateContraventionComponent;
  let fixture: ComponentFixture<UpdateContraventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContraventionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateContraventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
