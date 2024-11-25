import { Component } from '@angular/core';
import {PiattoService} from "../piatto.service";
import {Piatto} from "../../models/piatto.model";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-piatto-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './piatto-create.component.html',
  styleUrl: './piatto-create.component.css'
})
export class PiattoCreateComponent {

  piatto:Piatto={ingredienti: "", nome: ""};

  constructor(private service:PiattoService ,  private router: Router , private route: ActivatedRoute) {
  }


  onSave(){


    this.service.saveNewPiatto(this.piatto).subscribe(
      data=>{
        console.log("Piatto creato");
        this.router.navigate([ "../", data.nome ] , { relativeTo: this.route });
      },
      error => {console.error(error )}
    )


  }



}
