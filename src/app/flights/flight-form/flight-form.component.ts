import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Crew } from 'src/app/models/crew.model';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  form: FormGroup;
  public readonly jobs: any[] = [
    { value: 'pilot', label: 'Pilot' },
    { value: 'steward', label: 'Steward' },
    { value: 'mechanic', label: 'Mechanic' },
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public buildCrewMember() {
    return this.formBuilder.group({
      name: '',
      job: '',
    });
  }

  public get crew() {
    return this.form.get('crew') as FormArray;
  }

  public addCrewMember() {
    this.crew.push(this.buildCrewMember());
  }

  public removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      departureTime: ['', [Validators.required]],
      returnTime: ['', [Validators.required]],
      additionalInformation: ['', [Validators.required]],
      withDiscount: false,
      crew: this.formBuilder.array([this.buildCrewMember()]),
    });
  }

}
