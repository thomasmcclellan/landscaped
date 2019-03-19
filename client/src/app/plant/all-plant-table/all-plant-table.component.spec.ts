import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlantTableComponent } from './all-plant-table.component';

describe('AllPlantTableComponent', () => {
  let component: AllPlantTableComponent;
  let fixture: ComponentFixture<AllPlantTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPlantTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
