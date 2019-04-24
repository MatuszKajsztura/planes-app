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
    MAT_DIALOG_DEFAULT_OPTIONS, // material design global default dialog config
    MatSnackBarConfig,
    MAT_SNACK_BAR_DEFAULT_OPTIONS, // material design default snackbar config
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

const MAT_DIALOG_CONFIG: MatDialogConfig = { // material design global dialog config
  width: '700px',
  disableClose: true,
  hasBackdrop: true,
  maxWidth: '100%',
};

const MAT_SNACKBAR_CONFIG: MatSnackBarConfig = { // snackbar config
  horizontalPosition: 'right',
  verticalPosition: 'top',
  panelClass: 'toast',
  duration: 3000,
};

@NgModule({
  exports: [...MATERIAL_MODULES],
  declarations: [],
  providers: [ // material design global dialog config, snackbar(toast) config
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: MAT_DIALOG_CONFIG,
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: MAT_SNACKBAR_CONFIG,
    }
  ],
})
export class MaterialModule { }
