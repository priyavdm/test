import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { HttpClientModule } from '@angular/common/http';
import { ServisetestService } from "./servisetest.service";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
