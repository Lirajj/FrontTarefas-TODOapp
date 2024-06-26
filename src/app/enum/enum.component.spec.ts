import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumComponent } from './enum.component';

describe('EnumComponent', () => {
  let component: EnumComponent;
  let fixture: ComponentFixture<EnumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
