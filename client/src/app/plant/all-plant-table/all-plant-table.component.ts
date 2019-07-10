import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ModalComponent } from '../../modal/modal.component';
import allPlants from '../../../allPlants.json';

@Component({
  selector: 'app-all-plant-table',
  templateUrl: './all-plant-table.component.html',
  styleUrls: ['./all-plant-table.component.css']
})
export class AllPlantTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'hardinessRange', 'sowRange', 'bloomRange', 'harvestRange', 'soil', 'water', 'sun', 'choose']

  //* Pulling fake data from allPlants.json
  // TODO: Replace fake data with real data
  plantData: Array<any> = allPlants
  
  dataSource: any
  pageSizeOptions: number[] = [5, 10, 25]

  @ViewChild(MatSort, { static: true }) sort: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(private _dialog: MatDialog) { }

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

  openDialog(selectedPlant: any) : void {
    this._dialog.open(ModalComponent, {
      data: selectedPlant
    })
  }
}

// TODO: actually create sorting capabilites
// TODO: filter on more than just name
// TODO: change active color from purple to green
// TODO: add shadow to paginator