import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestionListComponent } from './guestion-list.component';

describe('GuestionListComponent', () => {
  let component: GuestionListComponent;
  let fixture: ComponentFixture<GuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
