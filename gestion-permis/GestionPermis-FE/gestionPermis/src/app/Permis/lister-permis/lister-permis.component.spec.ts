import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPermisComponent } from './lister-permis.component';

describe('ListerPermisComponent', () => {
  let component: ListerPermisComponent;
  let fixture: ComponentFixture<ListerPermisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerPermisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerPermisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
