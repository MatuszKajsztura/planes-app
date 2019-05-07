import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Crew } from 'src/app/models/crew.model';
import { Flight } from 'src/app/models/flight.model';
import { SKPrefixValidator } from './prefix.validator';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  public form: FormGroup;
  @Input() public isEditMode: boolean = false;
  public readonly jobs: any[] = [
    { value: 'co_pilot', label: 'Pilot' },
    { value: 'senior_cabin_crew', label: 'Steward' },
    { value: 'mechanic', label: 'Mechanic' },
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public buildCrewMember(crewMember: Crew = {} as Crew) {
    return this.formBuilder.group({
      name: crewMember.name || '',
      job: crewMember.job || '',
    });
  }

  public setFlight(flight: Flight) {
    const { key, ...formData } = flight;
    this.form.patchValue(formData);
    formData.crew.forEach(crewMember => this.addCrewMember(crewMember))
  }

  public get crew() {
    return this.form.get('crew') as FormArray;
  }

  public addCrewMember(crewMember?) {
    this.crew.push(this.buildCrewMember(crewMember));
  }

  public removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8), SKPrefixValidator]],
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      departureTime: ['', [Validators.required]],
      returnTime: ['', [Validators.required]],
      additionalInformation: ['', [Validators.required]],
      withDiscount: false,
      crew: this.formBuilder.array(this.isEditMode ? [] : [this.buildCrewMember()]),
    });
  }

}
