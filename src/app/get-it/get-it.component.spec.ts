import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetItComponent } from './get-it.component';

describe('GetItComponent', () => {
  let component: GetItComponent;
  let fixture: ComponentFixture<GetItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetItComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
