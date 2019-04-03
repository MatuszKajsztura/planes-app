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
    MatButtonModule,
    MatDialogConfig,
    MAT_DIALOG_DEFAULT_OPTIONS,
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
  MatButtonModule,
];

const MAT_DIALOG_CONFIG: MatDialogConfig = {
  width: '700px',
  disableClose: true,
  hasBackdrop: true,
  maxWidth: '100%',
};

@NgModule({
  exports: [...MATERIAL_MODULES],
  declarations: [],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: MAT_DIALOG_CONFIG
    }
  ],
})
export class MaterialModule { }
