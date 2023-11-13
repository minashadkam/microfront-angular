import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatListItem, MatListModule} from "@angular/material/list";



export let AppInjector: Injector;

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatSidenavModule, MatButtonModule, MatIconModule, MatMenuModule, MatListModule ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor( private _injector: Injector) {
    AppInjector = this._injector;
  }
}
