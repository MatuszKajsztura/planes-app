import { Crew } from './crew.model';

export class Flight {

  constructor(
    public additionalInformation: string,
    public code: string,
    public crew: Crew[],
    public departureTime: string,
    public destination: string,
    public origin: string,
    public returnTime: string,
    public withSKPlanesDiscount: boolean,
    public key: string,
  ) { }
}
