import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatCardModule, 
  MatPaginatorModule, 
  MatSortModule, 
  MatTableModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatGridListModule, 
  MatIconModule, 
  MatBadgeModule, 
  MatDialogModule 
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
