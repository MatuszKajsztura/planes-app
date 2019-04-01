import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { FlightsModule } from './flights/flights.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    CoreModule,
    FlightsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
