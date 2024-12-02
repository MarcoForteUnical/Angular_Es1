import {CanActivateFn, Router} from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import {firstValueFrom} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);


  return firstValueFrom(authService.getUser())
    .then(user => {
      if (user) {
        return true; // L'utente esiste, consenti l'accesso
      }


      // if not logged go to login page
      router.navigate([  "/login" ]);

      // never used
      return false;
    })
    .catch(() => router.navigate([  "/login" ])
    ); // Blocca l'accesso in caso di error

};
