import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Flight } from 'src/app/models/flight.model';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { tap } from 'rxjs/operators';

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
  ) { }
  
  ngAfterViewInit(): void {
    this.loadFlight();
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
    )

  }

}
