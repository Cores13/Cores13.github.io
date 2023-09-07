import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTagComponent } from './empty-tag.component';

describe('EmptyTagComponent', () => {
  let component: EmptyTagComponent;
  let fixture: ComponentFixture<EmptyTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyTagComponent]
    });
    fixture = TestBed.createComponent(EmptyTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
