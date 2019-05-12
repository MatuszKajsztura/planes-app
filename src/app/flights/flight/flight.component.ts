import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // bindings will only start on input change or after event emit
})
export class FlightComponent {
  @Input() flight: Flight;

  //to manual run detection :
  // constructor(private changeDetection: ChangeDetectorRef) {
  //   this.changeDetection.detectChanges();
  // // this.changeDetecion.markForCheck();
  // }
 
}
