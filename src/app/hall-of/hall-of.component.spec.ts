import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallOfComponent } from './hall-of.component';

describe('HallOfComponent', () => {
  let component: HallOfComponent;
  let fixture: ComponentFixture<HallOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HallOfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HallOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
