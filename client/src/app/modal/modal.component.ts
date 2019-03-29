import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  _plantData: object = {}
  _plots: any = [{ name: 'Plot 1' }, { name: 'Plot 2' }, { name: 'Plot 3' }]
  
  public form: FormGroup = new FormGroup({
    quantity: new FormControl('')
  })

  constructor(@Inject(MAT_DIALOG_DATA) public plantData: any) { }

  ngOnInit() {
    this._plantData = this.plantData
    console.log(this._plots)

    this.form.setValue({
      quantity: this._plantData['plantsPerSquareFoot']
    })
  }

}
