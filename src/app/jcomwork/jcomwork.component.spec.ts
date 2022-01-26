import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcomworkComponent } from './jcomwork.component';

describe('JcomworkComponent', () => {
  let component: JcomworkComponent;
  let fixture: ComponentFixture<JcomworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcomworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcomworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
