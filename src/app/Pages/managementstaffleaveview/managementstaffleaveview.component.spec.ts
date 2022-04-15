import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementstaffleaveviewComponent } from './managementstaffleaveview.component';

describe('ManagementstaffleaveviewComponent', () => {
  let component: ManagementstaffleaveviewComponent;
  let fixture: ComponentFixture<ManagementstaffleaveviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementstaffleaveviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementstaffleaveviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
