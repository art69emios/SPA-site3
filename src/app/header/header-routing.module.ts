import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { AdminComponent } from './admin/admin.component';
import { BusketComponent } from './busket/busket.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuardService } from './sing-in/auth-guard.service';
import { SingInComponent } from './sing-in/sing-in.component';

const routes: Routes = [
  {path:'',  component: HomeComponent},
  {path:'home',  component: HomeComponent},
  {path:'catalog', component: CatalogComponent},
  {path:'admin', canActivate:[AuthGuardService], component: AdminComponent},
  {path:'sing-in', component: SingInComponent},
  {path:'register', component: RegistrationComponent},
  {path:'busket', component: BusketComponent},
  {path: 'catalog/:category', component: CatalogComponent},
  {path:'**', component: CatalogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
