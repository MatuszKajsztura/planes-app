import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Flight } from 'src/app/models/flight.model';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent implements AfterViewInit {
  @ViewChild('flightForm') flightForm: FlightFormComponent;
  public flight: Flight;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightsService,
    private toast: MatSnackBar,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    this.loadFlight();
  }

  public save() {
    this.flightService.updateFlight(this.flight.key, this.flightForm.form.value)
      .then(
        () => {
          this.toast.open('Flight has been updated', '', { panelClass: 'toast-success'}),
          this.router.navigate(['/dashboard'])
        },
        (error: HttpErrorResponse) => {
          return this.toast.open(error.message);
        }
      );
  }

  private loadFlight() {
    const key = this.route.snapshot.params['key'];

    this.flightService.getFlight(key)
    .pipe(
      tap(flight => this.flight = flight)
    )
    .subscribe(
      (flight: Flight) => {
        this.flightForm.setFlight(flight);
      }
    );

  }

}
