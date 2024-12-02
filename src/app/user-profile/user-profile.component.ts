import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{

  user:any=null;

  constructor(private authService:AuthService , ) {
  }

  ngOnInit(): void {
        this.authService.getUser()
          .subscribe({
            next: data => {
              console.log("Current user:", data)
              this.user=data;
            },
            error: (err) => console.error('Login failed', err),
          });

    }







}
