import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AdminloginPageComponent,
  DashboardComponent,
} from './pages';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AdminloginPageComponent,
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    ReactiveFormsModule,

    AppRoutingModule,
  ],
})
export class AppModule {}
