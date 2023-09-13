import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTagV2Component } from './empty-tag-v2.component';

describe('EmptyTagV2Component', () => {
  let component: EmptyTagV2Component;
  let fixture: ComponentFixture<EmptyTagV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyTagV2Component]
    });
    fixture = TestBed.createComponent(EmptyTagV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
