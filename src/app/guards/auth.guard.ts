import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthguardService } from '../services/authguard.service';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthguardService).canActivate(route, state);
};
