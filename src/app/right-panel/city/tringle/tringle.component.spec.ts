import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TringleComponent } from './tringle.component';

describe('TringleComponent', () => {
  let component: TringleComponent;
  let fixture: ComponentFixture<TringleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TringleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TringleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
