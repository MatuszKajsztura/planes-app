import { FormControl, ValidationErrors } from '@angular/forms';

export const SKPrefixValidator = (formControl: FormControl): ValidationErrors | null  => {
  return (formControl.value as string).startsWith('SK') ? null : { incorrectCode: true };
};
