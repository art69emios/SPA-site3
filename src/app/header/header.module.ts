import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AdminComponent } from './admin/admin.component';
import { BusketComponent } from './busket/busket.component';
import { HeaderComponent } from './header.component';
import {InputTextModule} from 'primeng/inputtext';
import { HeaderRoutingModule } from './header-routing.module';
import { FormsModule } from '@angular/forms';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    CatalogComponent,
    AdminComponent,
    BusketComponent,
    HeaderComponent,
    CatalogItemComponent,
    SingInComponent,
    RegistrationComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    InputTextModule,
    HeaderRoutingModule,
    FormsModule
  ],
  exports:[
    AdminComponent,
    BusketComponent,
    HeaderComponent,
    CatalogComponent,
  ]
})
export class HeaderModule { }
