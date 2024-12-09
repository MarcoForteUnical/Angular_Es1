import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RisotrantiHomeComponent} from "./ristorante/risotranti-home/risotranti-home.component";
import {PiattoHomeComponent} from "./piatto/piatto-home/piatto-home.component";
import {PiattoDetailsComponent} from "./piatto/piatto-details/piatto-details.component";
import {PiattoCreateComponent} from "./piatto/piatto-create/piatto-create.component";
import {LoginComponent} from "./auth/login/login.component";
import {authGuard} from "./auth/auth.guard";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {ForbiddenComponent} from "./common/forbidden/forbidden.component";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {UserRole} from "./auth/user-role.enum";

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ristoranti', component: RisotrantiHomeComponent },
  { path: 'piatti', component: PiattoHomeComponent  , canActivate :[authGuard]},
  { path: 'piatti/new', component: PiattoCreateComponent },
  { path: 'piatti/:nome', component: PiattoDetailsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent },

  { path: 'admin-home', component: AdminHomeComponent , canActivate :[authGuard] , data: { requiredRoles: [UserRole.ADMIN] } },

  { path: '403', component: ForbiddenComponent }

];
