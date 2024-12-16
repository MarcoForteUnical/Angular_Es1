import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  username = '';
  password = '';

  constructor(private authService: AuthService ,  private router: Router ) {}



  login() {
    this.authService.login(this.username, this.password)
      .subscribe({
        next: () => {
          console.log("Logged User:", )
          this.router.navigate([  "/user-profile" ]);
        },
        error: (err) => console.error('Login failed', err),
      });
  }

  logout() {
    this.authService.logout().subscribe(() => alert('Logged out!'));
  }



  // google

  ngOnInit(): void {
    this.initializeGoogleOneTap();



    // Registra il callback come funzione globale
    (window as any).handleCredentialResponse = this.handleCredentialResponse.bind(this);

  }

  initializeGoogleOneTap() {
    // @ts-ignore
    window.google.accounts.id.initialize({
      client_id: '48205785028-v3b6dpm7qml77j5h5dirnl480he05gmk.apps.googleusercontent.com', // Sostituisci con il tuo client ID
      callback: this.handleCredentialResponse.bind(this),
    });

    // Mostra il prompt di One Tap
    // @ts-ignore
    window.google.accounts.id.prompt();
  }




  handleCredentialResponse(response: any) {
    console.log('ID Token ricevuto: ', response.credential);

    // Decodifica l'ID Token (opzionale per visualizzare i dettagli lato client)
    const userInfo = this.decodeJwtResponse(response.credential);
    console.log('Informazioni utente: ', userInfo);

    // Invia il token al backend
    this.sendTokenToBackend(response.credential);
  }

  decodeJwtResponse(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  sendTokenToBackend(token: string) {
    console.log('Inviando il token al backend: ', token);
    // Usa HttpClient per inviare il token al backend
    // this.http.post('/api/auth/google', { token }).subscribe();


    this.authService.performGoogleLogin(token)  .subscribe({
      next: () => {
        console.log("Logged User:", )
        this.router.navigate([  "/user-profile" ]);
      },
      error: (err) => console.error('Login failed', err),
    });
  }


}


