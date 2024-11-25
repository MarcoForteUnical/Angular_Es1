import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiattoCreateComponent } from './piatto-create.component';

describe('PiattoCreateComponent', () => {
  let component: PiattoCreateComponent;
  let fixture: ComponentFixture<PiattoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiattoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiattoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
