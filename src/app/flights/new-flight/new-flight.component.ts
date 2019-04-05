import { Component, ViewChild } from '@angular/core';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { FlightsService } from 'src/app/core/services/flights.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})
export class NewFlightComponent {
  @ViewChild('flightFormRef') flightForm: FlightFormComponent;

  constructor(
    private flightService: FlightsService,
    private dialofRef: MatDialogRef<NewFlightComponent>,
    private mdSnackBar: MatSnackBar,
  ) { }

  public addFlight() {
    this.flightService.createFight(this.flightForm.form.value)
      .then( this.onFlightAddSuccess.bind(this), this.onFlightAddFailure.bind(this));
  }

  private onFlightAddSuccess() {
    this.dialofRef.close();
    this.mdSnackBar.open('The Flight added succesfully', '', { panelClass: 'toast-success'} ); // here we can pass a class to style toast
  }

  private onFlightAddFailure(error: HttpErrorResponse) {
    this.mdSnackBar.open(error.message, '', { panelClass: 'toast-error'});
  }
}
