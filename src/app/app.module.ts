import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import {MdButtonModule, MdSidenavModule, MdListModule, MdSliderModule, MdTooltipModule} from '@angular/material';
import { ParticlesModule } from 'angular-particle';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClipboardModule } from 'ngx-clipboard';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo:'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'toh-universal'
    }),
    FormsModule,
    HttpModule, BrowserAnimationsModule, ClipboardModule,
    MdButtonModule, MdSidenavModule, MdListModule, MdSliderModule, MdTooltipModule, 
    RouterModule.forRoot(appRoutes),
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
