import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  _plantData: object = {}

  constructor(@Inject(MAT_DIALOG_DATA) public plantData: any) { }

  ngOnInit() {
    this._plantData = this.plantData
    console.log(this._plantData)
  }

}
