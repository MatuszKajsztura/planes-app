import { Component, Inject, Optional } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-basic-flight-details',
  templateUrl: './basic-flight-details.component.html',
  styleUrls: ['./basic-flight-details.component.scss']
})
export class BasicFlightDetailsComponent {
  public flight: Flight;
  constructor(
    private dialogRef: MatDialogRef<BasicFlightDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Flight, // get data from parent-creator component
  ) {
    this.flight = data; // get data from parent-creator component
  }

  public closeModal() {
    this.dialogRef.close();
  }

}
