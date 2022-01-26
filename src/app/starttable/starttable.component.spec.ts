import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttableComponent } from './starttable.component';

describe('StarttableComponent', () => {
  let component: StarttableComponent;
  let fixture: ComponentFixture<StarttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
