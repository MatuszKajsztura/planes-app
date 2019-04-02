import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../core/services/flights.service';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  public flights$: Observable<Flight[]> = this.flightsService.getFlights();

  constructor(
    private flightsService: FlightsService
  ) { }

  ngOnInit() {
  }

}
