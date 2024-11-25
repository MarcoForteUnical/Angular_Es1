import {Component, OnInit} from '@angular/core';
import {RisotranteService} from "../../ristorante/risotrante.service";
import {PiattoService} from "../piatto.service";
import {Piatto} from "../../models/piatto.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-piatto-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './piatto-home.component.html',
  styleUrl: './piatto-home.component.css'
})
export class PiattoHomeComponent implements OnInit {


  constructor(
    private piattoService: PiattoService
  ) {
  }


  piatti:Piatto[]=[];



  ngOnInit(): void {
    this.onLoadPiatti();
  }

  onLoadPiatti() {

    this.piattoService.getAllPiatti().subscribe(
      (data => {
        console.log(data);
        this.piatti=data;
      }),
      (error => {
        console.error(error);
      })
    )

  }


}
