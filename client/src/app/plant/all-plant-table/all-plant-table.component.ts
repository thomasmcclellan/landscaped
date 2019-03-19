import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-all-plant-table',
  templateUrl: './all-plant-table.component.html',
  styleUrls: ['./all-plant-table.component.css']
})
export class AllPlantTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'hardinessRange', 'sowRange', 'bloomRange', 'harvestRange', 'soil', 'water', 'sun', 'choose']
  plantData: any = [
    {
      plantName: 'Tomato',
      sowDateStart: 'January',
      sowDateEnd: 'March',
      bloomDateStart: 'March',
      bloomDateEnd: 'May',
      harvestDateStart: 'May',
      harvestDateEnd: 'July',
      sowDepth: 2,
      plantDistance: 4,
      rowDistance: 3,
      sunRequirements: 'Full Sun',
      waterRequirements: 'Generous',
      soilType: 'Loam',
      fertilizer: '5-10-10',
      soilPH: '7.0',
      hardinessZoneLow: 3,
      hardinessZoneHigh: 9,
      germinationDays: 10,
      daysTilHarvest: 100,
      containerDepth: 4,
      plantHeight: 10,
      indoorAllowed: true,
      outdoorAllowed: true,
      containerAllowed: true,
      plantHardiness: 'Tender',
      plantsPerSquareFoot: 4,
      lowestTemp: 30,
      highestTemp: 100,
      transplantingWindow: 40
    },
    {
      plantName: 'Zucchini',
      sowDateStart: 'January',
      sowDateEnd: 'March',
      bloomDateStart: 'March',
      bloomDateEnd: 'May',
      harvestDateStart: 'May',
      harvestDateEnd: 'July',
      sowDepth: 2,
      plantDistance: 4,
      rowDistance: 3,
      sunRequirements: 'Full Sun',
      waterRequirements: 'Generous',
      soilType: 'Loam',
      fertilizer: '5-10-10',
      soilPH: '7.0',
      hardinessZoneLow: 3,
      hardinessZoneHigh: 9,
      germinationDays: 10,
      daysTilHarvest: 100,
      containerDepth: 4,
      plantHeight: 10,
      indoorAllowed: true,
      outdoorAllowed: true,
      containerAllowed: true,
      plantHardiness: 'Tender',
      plantsPerSquareFoot: 4,
      lowestTemp: 30,
      highestTemp: 100,
      transplantingWindow: 40
    },
    {
      plantName: 'Bell Pepper',
      sowDateStart: 'January',
      sowDateEnd: 'March',
      bloomDateStart: 'March',
      bloomDateEnd: 'May',
      harvestDateStart: 'May',
      harvestDateEnd: 'July',
      sowDepth: 2,
      plantDistance: 4,
      rowDistance: 3,
      sunRequirements: 'Full Sun',
      waterRequirements: 'Generous',
      soilType: 'Loam',
      fertilizer: '5-10-10',
      soilPH: '7.0',
      hardinessZoneLow: 3,
      hardinessZoneHigh: 9,
      germinationDays: 10,
      daysTilHarvest: 100,
      containerDepth: 4,
      plantHeight: 10,
      indoorAllowed: true,
      outdoorAllowed: true,
      containerAllowed: true,
      plantHardiness: 'Tender',
      plantsPerSquareFoot: 4,
      lowestTemp: 30,
      highestTemp: 100,
      transplantingWindow: 40
    },
    {
      plantName: 'Onion',
      sowDateStart: 'January',
      sowDateEnd: 'March',
      bloomDateStart: 'March',
      bloomDateEnd: 'May',
      harvestDateStart: 'May',
      harvestDateEnd: 'July',
      sowDepth: 2,
      plantDistance: 4,
      rowDistance: 3,
      sunRequirements: 'Full Sun',
      waterRequirements: 'Generous',
      soilType: 'Loam',
      fertilizer: '5-10-10',
      soilPH: '7.0',
      hardinessZoneLow: 3,
      hardinessZoneHigh: 9,
      germinationDays: 10,
      daysTilHarvest: 100,
      containerDepth: 4,
      plantHeight: 10,
      indoorAllowed: true,
      outdoorAllowed: true,
      containerAllowed: true,
      plantHardiness: 'Tender',
      plantsPerSquareFoot: 4,
      lowestTemp: 30,
      highestTemp: 100,
      transplantingWindow: 40
    },
    {
      plantName: 'Brussel Sprouts',
      sowDateStart: 'January',
      sowDateEnd: 'March',
      bloomDateStart: 'March',
      bloomDateEnd: 'May',
      harvestDateStart: 'May',
      harvestDateEnd: 'July',
      sowDepth: 2,
      plantDistance: 4,
      rowDistance: 3,
      sunRequirements: 'Full Sun',
      waterRequirements: 'Generous',
      soilType: 'Loam',
      fertilizer: '5-10-10',
      soilPH: '7.0',
      hardinessZoneLow: 3,
      hardinessZoneHigh: 9,
      germinationDays: 10,
      daysTilHarvest: 100,
      containerDepth: 4,
      plantHeight: 10,
      indoorAllowed: true,
      outdoorAllowed: true,
      containerAllowed: true,
      plantHardiness: 'Tender',
      plantsPerSquareFoot: 4,
      lowestTemp: 30,
      highestTemp: 100,
      transplantingWindow: 40
    },
    {
      plantName: 'Jalepeno',
      sowDateStart: 'January',
      sowDateEnd: 'March',
      bloomDateStart: 'March',
      bloomDateEnd: 'May',
      harvestDateStart: 'May',
      harvestDateEnd: 'July',
      sowDepth: 2,
      plantDistance: 4,
      rowDistance: 3,
      sunRequirements: 'Full Sun',
      waterRequirements: 'Generous',
      soilType: 'Loam',
      fertilizer: '5-10-10',
      soilPH: '7.0',
      hardinessZoneLow: 3,
      hardinessZoneHigh: 9,
      germinationDays: 10,
      daysTilHarvest: 100,
      containerDepth: 4,
      plantHeight: 10,
      indoorAllowed: true,
      outdoorAllowed: true,
      containerAllowed: true,
      plantHardiness: 'Tender',
      plantsPerSquareFoot: 4,
      lowestTemp: 30,
      highestTemp: 100,
      transplantingWindow: 40
    },
    {
      plantName: 'Egg Plant',
      sowDateStart: 'January',
      sowDateEnd: 'March',
      bloomDateStart: 'March',
      bloomDateEnd: 'May',
      harvestDateStart: 'May',
      harvestDateEnd: 'July',
      sowDepth: 2,
      plantDistance: 4,
      rowDistance: 3,
      sunRequirements: 'Full Sun',
      waterRequirements: 'Generous',
      soilType: 'Loam',
      fertilizer: '5-10-10',
      soilPH: '7.0',
      hardinessZoneLow: 3,
      hardinessZoneHigh: 9,
      germinationDays: 10,
      daysTilHarvest: 100,
      containerDepth: 4,
      plantHeight: 10,
      indoorAllowed: true,
      outdoorAllowed: true,
      containerAllowed: true,
      plantHardiness: 'Tender',
      plantsPerSquareFoot: 4,
      lowestTemp: 30,
      highestTemp: 100,
      transplantingWindow: 40
    },
    {
      plantName: 'Wheat',
      sowDateStart: 'January',
      sowDateEnd: 'March',
      bloomDateStart: 'March',
      bloomDateEnd: 'May',
      harvestDateStart: 'May',
      harvestDateEnd: 'July',
      sowDepth: 2,
      plantDistance: 4,
      rowDistance: 3,
      sunRequirements: 'Full Sun',
      waterRequirements: 'Generous',
      soilType: 'Loam',
      fertilizer: '5-10-10',
      soilPH: '7.0',
      hardinessZoneLow: 3,
      hardinessZoneHigh: 9,
      germinationDays: 10,
      daysTilHarvest: 100,
      containerDepth: 4,
      plantHeight: 10,
      indoorAllowed: true,
      outdoorAllowed: true,
      containerAllowed: true,
      plantHardiness: 'Tender',
      plantsPerSquareFoot: 4,
      lowestTemp: 30,
      highestTemp: 100,
      transplantingWindow: 40
    },
    {
      plantName: 'Green Beans',
      sowDateStart: 'January',
      sowDateEnd: 'March',
      bloomDateStart: 'March',
      bloomDateEnd: 'May',
      harvestDateStart: 'May',
      harvestDateEnd: 'July',
      sowDepth: 2,
      plantDistance: 4,
      rowDistance: 3,
      sunRequirements: 'Full Sun',
      waterRequirements: 'Generous',
      soilType: 'Loam',
      fertilizer: '5-10-10',
      soilPH: '7.0',
      hardinessZoneLow: 3,
      hardinessZoneHigh: 9,
      germinationDays: 10,
      daysTilHarvest: 100,
      containerDepth: 4,
      plantHeight: 10,
      indoorAllowed: true,
      outdoorAllowed: true,
      containerAllowed: true,
      plantHardiness: 'Tender',
      plantsPerSquareFoot: 4,
      lowestTemp: 30,
      highestTemp: 100,
      transplantingWindow: 40
    },
    {
      plantName: 'Tomato',
      sowDateStart: 'January',
      sowDateEnd: 'March',
      bloomDateStart: 'March',
      bloomDateEnd: 'May',
      harvestDateStart: 'May',
      harvestDateEnd: 'July',
      sowDepth: 2,
      plantDistance: 4,
      rowDistance: 3,
      sunRequirements: 'Full Sun',
      waterRequirements: 'Generous',
      soilType: 'Loam',
      fertilizer: '5-10-10',
      soilPH: '7.0',
      hardinessZoneLow: 3,
      hardinessZoneHigh: 9,
      germinationDays: 10,
      daysTilHarvest: 100,
      containerDepth: 4,
      plantHeight: 10,
      indoorAllowed: true,
      outdoorAllowed: true,
      containerAllowed: true,
      plantHardiness: 'Tender',
      plantsPerSquareFoot: 4,
      lowestTemp: 30,
      highestTemp: 100,
      transplantingWindow: 40
    }
  ]
  dataSource: any
  pageSizeOptions: number[] = [5, 10, 25]

  constructor() { }

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  ngOnInit() {
    this.onRangeBuilder()
    this.dataSource = new MatTableDataSource(this.plantData)
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  onRangeBuilder() {
    this.plantData.map(plant => {
      plant['sowRange'] = `${plant.sowDateStart}-${plant.sowDateEnd}`
      plant['bloomRange'] = `${plant.bloomDateStart}-${plant.bloomDateEnd}`
      plant['harvestRange'] = `${plant.harvestDateStart}-${plant.harvestDateEnd}`
      plant['hardinessRange'] = `${plant.hardinessZoneLow}-${plant.hardinessZoneHigh}`
    })
  }

  applyFilter(filteredValue: string) : void {
    this.dataSource.filter = filteredValue.trim().toLowerCase()
  }

}
