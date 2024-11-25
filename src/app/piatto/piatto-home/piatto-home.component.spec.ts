import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiattoHomeComponent } from './piatto-home.component';

describe('PiattoHomeComponent', () => {
  let component: PiattoHomeComponent;
  let fixture: ComponentFixture<PiattoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiattoHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiattoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
