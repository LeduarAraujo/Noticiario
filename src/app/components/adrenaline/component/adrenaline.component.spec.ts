import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrenalineComponent } from './adrenaline.component';

describe('AdrenalineComponent', () => {
  let component: AdrenalineComponent;
  let fixture: ComponentFixture<AdrenalineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdrenalineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdrenalineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
