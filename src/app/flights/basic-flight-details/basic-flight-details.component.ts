import { Component, Inject, Optional } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FlightsService } from 'src/app/core/services/flights.service';

@Component({
  selector: 'app-basic-flight-details',
  templateUrl: './basic-flight-details.component.html',
  styleUrls: ['./basic-flight-details.component.scss']
})
export class BasicFlightDetailsComponent {
  public flight: Flight;
  constructor(
    private flightService: FlightsService,
    private router: Router,
    private dialogRef: MatDialogRef<BasicFlightDetailsComponent>,
    private toast: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private data: Flight, // get data from parent-creator component
  ) {
    this.flight = data; // get data from parent-creator component
  }

  public closeModal() {
    this.dialogRef.close();
  }

  public goToEditFlight(key) {
    this.closeModal();
    this.router.navigate(['/dashboard/flights/' + key]);
  }

  public removeFlight(key: string) {
    this.flightService.removeFlight(key)
      .then(() => {
        this.toast.open('Flight has been removed successfully', '', { panelClass: 'toast-success'});
        this.closeModal();
      });
  }

}
