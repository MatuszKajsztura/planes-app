import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightComponent } from './flight/flight.component';
import { MaterialModule } from '../material/material.module';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BasicFlightDetailsComponent } from './basic-flight-details/basic-flight-details.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { FlightsRoutingModule } from './flights-routing.module';

@NgModule({
  declarations: [
    FlightsComponent,
    FlightComponent,
    NewFlightComponent,
    FlightFormComponent,
    BasicFlightDetailsComponent,
    EditFlightComponent,
  ],
  entryComponents: [
    NewFlightComponent,
    BasicFlightDetailsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlightsRoutingModule,
  ],
  exports: [FlightsComponent]
})
export class FlightsModule { }
