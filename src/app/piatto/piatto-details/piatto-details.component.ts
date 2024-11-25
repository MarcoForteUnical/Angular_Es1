import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {PiattoService} from "../piatto.service";
import {Piatto} from "../../models/piatto.model";
import {LoadingComponent} from "../../common/loading/loading.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-piatto-details',
  standalone: true,
  imports: [
    LoadingComponent,
    FormsModule
  ],
  templateUrl: './piatto-details.component.html',
  styleUrl: './piatto-details.component.css'
})
export class PiattoDetailsComponent implements OnInit{

  piatto!:Piatto;
  loading= false;

  constructor(private service: PiattoService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.loading=true;
    // retrive del nome piatto
    const nomePiatto = this.route.snapshot.paramMap.get('nome');
    console.log('Retrieve nomePiatto=', nomePiatto);

    if(nomePiatto==null ){
      throw new Error("Nome Piatto not found");
    }

    this.service.getPiattoByName(nomePiatto).subscribe(

      data=>{this.piatto=data; console.log("Piatto ricevuto");     this.loading=false;},
      error => {console.error(error);     this.loading=false;}

    );

    }


  onUpdate() {
    console.log('piatto=', this.piatto);

    this.service.updatePiatto(this.piatto).subscribe(
      data=>{this.piatto=data},
      error => {console.error(error)}
    )


  }
}
