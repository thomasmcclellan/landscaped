import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PlantComponent } from './plant/plant.component';
import { NoteComponent } from './note/note.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Plants', component: PlantComponent },
  { path: 'Notes', component: NoteComponent },
  { path: 'Calendar', component: CalendarComponent },
  { path: 'Materials', component: MaterialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
