import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletypesComponent } from './tabletypes.component';

describe('TabletypesComponent', () => {
  let component: TabletypesComponent;
  let fixture: ComponentFixture<TabletypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
