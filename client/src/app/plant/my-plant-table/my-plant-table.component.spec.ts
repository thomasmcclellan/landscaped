import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlantTableComponent } from './my-plant-table.component';

describe('MyPlantTableComponent', () => {
  let component: MyPlantTableComponent;
  let fixture: ComponentFixture<MyPlantTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlantTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
