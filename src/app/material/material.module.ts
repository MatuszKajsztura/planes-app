import { NgModule } from '@angular/core';

import {
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
  } from '@angular/material';

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  exports: [...MATERIAL_MODULES],
})
export class MaterialModule { }
