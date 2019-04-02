import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flight } from 'src/app/models/flight.model';
import { Crew } from 'src/app/models/crew.model';

@Injectable({
  providedIn: 'root' // singleton - jedna instancja w roocie aplikacji
})
export class FlightsService {
  private API_URL = '/flights';
  constructor(
    private db: AngularFireDatabase
  ) {
  console.log('service');
  }

  public getFlights(): Observable<Flight[]> {
      return this.db.list<any>(this.API_URL).snapshotChanges()
        .pipe(
          map((response) => response.map((flight) => this.assignKey(flight))),
          map((flights) => flights.map((flight: any) => {
              return new Flight(
                flight.additionalInformation,
                flight.code,
                flight.crew ? flight.crew.map((crew: any) => {
                  return new Crew(crew.job, crew.name) ;
                }) : [],
                flight.departureTime,
                flight.destination,
                flight.origin,
                flight.returnTime,
                flight.withSKPlanesDiscount,
                flight.key
              );
          })
        )
      );
  }

  private assignKey(flight) {
    return {
      ...flight.payload.val(),
      key: flight.key
    };
  }
}
