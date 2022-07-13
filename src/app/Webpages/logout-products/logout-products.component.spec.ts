import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutProductsComponent } from './logout-products.component';

describe('LogoutProductsComponent', () => {
  let component: LogoutProductsComponent;
  let fixture: ComponentFixture<LogoutProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
