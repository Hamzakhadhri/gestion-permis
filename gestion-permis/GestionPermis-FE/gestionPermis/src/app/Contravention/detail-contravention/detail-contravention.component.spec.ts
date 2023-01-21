import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContraventionComponent } from './detail-contravention.component';

describe('DetailContraventionComponent', () => {
  let component: DetailContraventionComponent;
  let fixture: ComponentFixture<DetailContraventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailContraventionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailContraventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
