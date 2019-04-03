import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightComponent } from './flight/flight.component';
import { MaterialModule } from '../material/material.module';
import { NewFlightComponent } from './new-flight/new-flight.component';

@NgModule({
  declarations: [
    FlightsComponent,
    FlightComponent,
    NewFlightComponent
  ],
  entryComponents: [ NewFlightComponent ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FlightsComponent]
})
export class FlightsModule { }
