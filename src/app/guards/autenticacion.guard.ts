import { CanActivateFn } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';
import { inject } from '@angular/core';

export const autenticacionGuard: CanActivateFn = (route, state) => {
  
  const local_service = inject(LocalStorageService)
  return local_service.getItem("username") != null && local_service.getItem("token") != null;
};
