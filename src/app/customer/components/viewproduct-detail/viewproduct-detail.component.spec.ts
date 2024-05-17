import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductDetailComponent } from './viewproduct-detail.component';

describe('ViewproductDetailComponent', () => {
  let component: ViewproductDetailComponent;
  let fixture: ComponentFixture<ViewproductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproductDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewproductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
