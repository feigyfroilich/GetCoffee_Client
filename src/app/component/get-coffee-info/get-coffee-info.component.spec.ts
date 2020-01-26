import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCoffeeInfoComponent } from './get-coffee-info.component';

describe('GetCoffeeInfoComponent', () => {
  let component: GetCoffeeInfoComponent;
  let fixture: ComponentFixture<GetCoffeeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCoffeeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCoffeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
