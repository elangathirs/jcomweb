import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcomworksComponent } from './jcomworks.component';

describe('JcomworksComponent', () => {
  let component: JcomworksComponent;
  let fixture: ComponentFixture<JcomworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcomworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcomworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
