import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPermisComponent } from './detail-permis.component';

describe('DetailPermisComponent', () => {
  let component: DetailPermisComponent;
  let fixture: ComponentFixture<DetailPermisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPermisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPermisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
