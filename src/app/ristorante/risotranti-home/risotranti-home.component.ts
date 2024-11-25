import {Component, OnInit} from '@angular/core';
import {RisotranteService} from "../risotrante.service";

@Component({
  selector: 'app-risotranti-home',
  standalone: true,
  imports: [],
  templateUrl: './risotranti-home.component.html',
  styleUrl: './risotranti-home.component.css'
})
export class RisotrantiHomeComponent implements OnInit{


  constructor(
    private ristoranteService: RisotranteService
  ){}

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
