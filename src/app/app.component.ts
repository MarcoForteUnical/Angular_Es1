import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestAngular';

  user:any;


  constructor(private authService: AuthService) {

    authService.currentUserSubject.subscribe(
      val=>{
        console.log("USer event:"+val);
        this.user=val;
      }
    );



  }


  logout() {
    this.authService.logout().subscribe();
  }
}
