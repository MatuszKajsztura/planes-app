import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightComponent } from './flight/flight.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FlightsComponent, FlightComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FlightsComponent]
})
export class FlightsModule { }
