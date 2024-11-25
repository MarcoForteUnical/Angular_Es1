import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Piatto} from "../models/piatto.model";

@Injectable({
  providedIn: 'root'
})
export class PiattoService {


  API_BASE_URL = '/api/piatto/v1/';


  constructor(
    private http: HttpClient
  ) {
  }


  getAllPiatti(): Observable<any> {
    return this.http.get<any>(this.API_BASE_URL);
  }

  getPiattoByName(nomePiatto:string): Observable<any> {
    return this.http.get<any>(this.API_BASE_URL+nomePiatto);
  }


  updatePiatto(piatto:Piatto): Observable<any> {
    return this.http.post<any>(this.API_BASE_URL+piatto.nome, piatto);
  }

  saveNewPiatto(piatto: Piatto) {
    return this.http.post<any>(this.API_BASE_URL, piatto);
  }
}
