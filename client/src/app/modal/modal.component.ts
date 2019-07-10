import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import myPlants from '../../myPlants.json';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  _plantData: object = {}
  _plots: Array<any> = myPlants
  plantCrop: FormGroup
  
  // public form: FormGroup = new FormGroup({
  //   quantity: new FormControl('')
  // })

  constructor(@Inject(MAT_DIALOG_DATA) public plantData: any, private fb: FormBuilder) { }

  ngOnInit() {
    this._plantData = this.plantData
    console.log(this._plantData)
    
    this.plantCrop = this.fb.group({
      // quantity: new FormControl().setValue({
      //   quantity: this._plantData['plantsPerSquareFoot']
      // }),
      quantity: new FormControl(),
      plot: new FormControl()
    })

    // this.form.setValue({
    // })

  }

  onPlant(): void {
    const newPlant: object = {}

    newPlant['plantName'] = this._plantData['plantName']
    newPlant['plantsPerSquareFoot'] = this._plantData['plantsPerSquareFoot']
    newPlant['quantity'] = this.plantCrop.value['quantity']

    this._plots.map(plot => (plot.name === this.plantCrop.value['plot']) ? plot.plants.unshift(newPlant) : false)
  }
}

// TODO: Have quanity and space filled adjust onSubmit of modal

// TODO: Create way to check sow dates and then a conditional that says too early or too late to plant based on if outside that range

// TODO: Create ability to create new plot based on "create new plot" link

// TODO: Format modal to look nicer