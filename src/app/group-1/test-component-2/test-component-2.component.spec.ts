import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2Component } from './test-component-2.component';

describe('TestComponent2Component', () => {
  let component: TestComponent2Component;
  let fixture: ComponentFixture<TestComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
