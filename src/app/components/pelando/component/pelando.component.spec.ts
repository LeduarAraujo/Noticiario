import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelandoComponent } from './pelando.component';

describe('PelandoComponent', () => {
  let component: PelandoComponent;
  let fixture: ComponentFixture<PelandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelandoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PelandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
