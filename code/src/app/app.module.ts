import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './components/accueil/home/home.component';
import { NavbarComponent } from './components/accueil/navbar/navbar.component';
import { HeaderComponent } from './components/accueil/header/header.component';
import { TabsMenuComponent } from './components/accueil/tabs-menu/tabs-menu.component';
import { CategoryListComponent } from './components/accueil/category-list/category-list.component';
import { TestimonialsListComponent } from './components/accueil/testimonials-list/testimonials-list.component';
import { NewsletterListComponent } from './components/accueil/newsletter-list/newsletter-list.component';
import { FooterComponent } from './components/accueil/footer/footer.component';
import { ProductListComponent } from './components/appartements/product-list/product-list.component';
import { FilterSectionComponent } from './components/appartements/filter-section/filter-section.component';
import { StatsComponent } from './components/appartements/stats/stats.component';
import { CtaComponent } from './components/appartements/cta/cta.component';
import { AppartementsListComponent } from './components/appartements/appartements-list/appartements-list.component';
import { HeaderAppartementComponent } from './components/appartements/product-list/header-appartement/header-appartement.component';
import { HeaderCategoryComponent } from './components/categories/header-category/header-category.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { MoreCategoriesComponent } from './components/categories/more-categories/more-categories.component';
import { InscriptionComponent } from './components/register/inscription/inscription.component';
import { InscriptionFormComponent } from './components/register/inscription-form/inscription-form.component';
import {RegisterComponent} from "./components/register/register/register.component";
import { ConnexionComponent } from './components/login/connexion/connexion.component';
import { ConnexionFormComponent } from './components/login/connexion-form/connexion-form.component';
import { LoginComponent } from './components/login/login/login.component';
import { NavbaradminComponent } from './components/administrateur/navbaradmin/navbaradmin.component';
import { DashboardHeaderComponent } from './components/administrateur/dashboard-header/dashboard-header.component';
import { AdminFeaturesComponent } from './components/administrateur/admin-features/admin-features.component';
import { AdminCategoriesComponent } from './components/administrateur/admin-categories/admin-categories.component';
import { AdminStatusComponent } from './components/administrateur/admin-status/admin-status.component';
import { AdminLayoutComponent } from './components/administrateur/admin-layout/admin-layout.component';
import { AddComponent } from './components/appartements/add/add.component';
import { AddNavbarAppartementComponent } from './components/appartements/add-navbar-appartement/add-navbar-appartement.component';
import { AddHeaderAppartementComponent } from './components/appartements/add-header-appartement/add-header-appartement.component';
import { AddAppartementFormComponent } from './components/appartements/add-appartement-form/add-appartement-form.component';
import {FormsModule} from "@angular/forms";
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { AddNavbarCategoryComponent } from './components/categories/add-navbar-category/add-navbar-category.component';
import { AddHeaderCategoryComponent } from './components/categories/add-header-category/add-header-category.component';
import { AddFilterSectionComponent } from './components/categories/add-filter-section/add-filter-section.component';
import { AddCategoriesSectionComponent } from './components/categories/add-categories-section/add-categories-section.component';
import { NavbarReservationComponent } from './components/reservation/navbar-reservation/navbar-reservation.component';
import { HeaderReservationComponent } from './components/reservation/header-reservation/header-reservation.component';
import { ConfirmationReservationComponent } from './components/reservation/confirmation-reservation/confirmation-reservation.component';
import { LayoutConfirmationReservationComponent } from './components/reservation/layout-confirmation-reservation/layout-confirmation-reservation.component';
import { NavbarPostedAppartementComponent } from './components/appartements/navbar-posted-appartement/navbar-posted-appartement.component';
import { HeaderPostedAppartementComponent } from './components/appartements/header-posted-appartement/header-posted-appartement.component';
import { CardPostedAppartementComponent } from './components/appartements/card-posted-appartement/card-posted-appartement.component';
import { ListPostedAppartementComponent } from './components/appartements/list-posted-appartement/list-posted-appartement.component';
import { PostedAppartementComponent } from './components/appartements/posted-appartement/posted-appartement.component';
import { NavbarContactComponent } from './components/contact/navbar-contact/navbar-contact.component';
import { HeaderContactComponent } from './components/contact/header-contact/header-contact.component';
import { FormContactComponent } from './components/contact/form-contact/form-contact.component';
import { InfoContactComponent } from './components/contact/info-contact/info-contact.component';
import { LayoutContactComponent } from './components/contact/layout-contact/layout-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    TabsMenuComponent,
    CategoryListComponent,
    TestimonialsListComponent,
    NewsletterListComponent,
    FooterComponent,
    ProductListComponent,
    FilterSectionComponent,
    StatsComponent,
    CtaComponent,
    AppartementsListComponent,
    HeaderAppartementComponent,
    HeaderCategoryComponent,
    CategoriesComponent,
    MoreCategoriesComponent,
    CategoryListComponent,
    RegisterComponent,
    InscriptionComponent,
   InscriptionFormComponent,
   ConnexionComponent,
   ConnexionFormComponent,
   LoginComponent,
   NavbaradminComponent,
   DashboardHeaderComponent,
   AdminFeaturesComponent,
   AdminCategoriesComponent,
   AdminStatusComponent,
   AdminLayoutComponent,
   AddComponent,
   AddNavbarAppartementComponent,
   AddHeaderAppartementComponent,
   AddAppartementFormComponent,
   AddCategoryComponent,
   AddNavbarCategoryComponent,
   AddHeaderCategoryComponent,
   AddFilterSectionComponent,
   AddCategoriesSectionComponent,
   NavbarReservationComponent,
   HeaderReservationComponent,
   ConfirmationReservationComponent,
   LayoutConfirmationReservationComponent,
   NavbarPostedAppartementComponent,
   HeaderPostedAppartementComponent,
   CardPostedAppartementComponent,
   ListPostedAppartementComponent,
   PostedAppartementComponent,
   NavbarContactComponent,
   HeaderContactComponent,
   FormContactComponent,
   InfoContactComponent,
   LayoutContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
