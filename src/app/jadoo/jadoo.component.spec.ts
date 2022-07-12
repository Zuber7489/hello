import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadooComponent } from './jadoo.component';

describe('JadooComponent', () => {
  let component: JadooComponent;
  let fixture: ComponentFixture<JadooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JadooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JadooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
