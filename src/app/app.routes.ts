import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RisotrantiHomeComponent} from "./ristorante/risotranti-home/risotranti-home.component";
import {PiattoHomeComponent} from "./piatto/piatto-home/piatto-home.component";
import {PiattoDetailsComponent} from "./piatto/piatto-details/piatto-details.component";
import {PiattoCreateComponent} from "./piatto/piatto-create/piatto-create.component";

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ristoranti', component: RisotrantiHomeComponent },
  { path: 'piatti', component: PiattoHomeComponent },
  { path: 'piatti/new', component: PiattoCreateComponent },
  { path: 'piatti/:nome', component: PiattoDetailsComponent },
];
