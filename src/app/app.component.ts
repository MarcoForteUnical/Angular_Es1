import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestComponent1Component} from "./test-component-1/test-component-1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , TestComponent1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestAngular';
}
