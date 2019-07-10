import { Component, OnInit } from '@angular/core';
import myPlants from '../../../myPlants.json';

@Component({
  selector: 'app-my-plant-table',
  templateUrl: './my-plant-table.component.html',
  styleUrls: ['./my-plant-table.component.css']
})
export class MyPlantTableComponent implements OnInit {
  //* Pulling fake data from myPlants.json
  // TODO: Replace fake data with real data
  _plots: Array<any> = myPlants
  plots: Array<any> = []

  constructor() { }

  ngOnInit() {
    this.plots = this._plots
    this.setSpace()
  }

  applyFilter(filteredValue: string) : void {
    this.plots = this._plots.filter(filter => filter.name.trim().toLowerCase().includes(filteredValue.trim().toLowerCase()))
  }

  setSpace() : void {
    this._plots.map(plot => {
      let used: number = 0

      plot['spaceAvailable'] = plot.height * plot.width

      for (let plant of plot.plants) {
        let temp: number = (plant.quanity / plant.plantsPerSquareFoot)
        used += temp
      }
      plot['spaceUsed'] = used
    })
  }
}