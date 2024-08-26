import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/accueil/home/home.component';
import {AppartementsListComponent} from "./components/appartements/appartements-list/appartements-list.component";
import {CategoriesComponent} from "./components/categories/categories/categories.component";
import {RegisterComponent} from "./components/register/register/register.component";
import {LoginComponent} from "./components/login/login/login.component";
import {AdminLayoutComponent} from "./components/administrateur/admin-layout/admin-layout.component";
import {AddComponent} from "./components/appartements/add/add.component";
import {AddCategoryComponent} from "./components/categories/add-category/add-category.component";
import {
  LayoutConfirmationReservationComponent
} from "./components/reservation/layout-confirmation-reservation/layout-confirmation-reservation.component";
import {PostedAppartementComponent} from "./components/appartements/posted-appartement/posted-appartement.component";
import {LayoutContactComponent} from "./components/contact/layout-contact/layout-contact.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'appartements', component: AppartementsListComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminLayoutComponent },
  { path: 'add-appart', component: AddComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'confirmation', component: LayoutConfirmationReservationComponent },
  { path: 'posted-appart', component: PostedAppartementComponent },
  { path: 'contact', component: LayoutContactComponent },
  { path: '', redirectTo: '/HomeComponent', pathMatch: 'full' }
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
