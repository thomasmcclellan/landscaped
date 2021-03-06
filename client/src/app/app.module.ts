import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material.module';
import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PlantComponent } from './plant/plant.component';
import { NoteComponent } from './note/note.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterialComponent } from './material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllPlantTableComponent } from './plant/all-plant-table/all-plant-table.component';
import { MyPlantTableComponent } from './plant/my-plant-table/my-plant-table.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    AuthComponent,
    HomeComponent,
    PlantComponent,
    NoteComponent,
    CalendarComponent,
    MaterialComponent,
    AllPlantTableComponent,
    MyPlantTableComponent,
    ModalComponent
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
