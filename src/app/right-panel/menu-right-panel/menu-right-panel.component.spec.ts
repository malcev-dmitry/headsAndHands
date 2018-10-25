import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRightPanelComponent } from './menu-right-panel.component';

describe('MenuRightPanelComponent', () => {
  let component: MenuRightPanelComponent;
  let fixture: ComponentFixture<MenuRightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
