import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchedComponent } from './watched/watched/watched.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TowatchModule } from './towatch/towatch.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from '@angular/material/input';
import { ReviewsComponent } from './reviews/reviews/reviews.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    WatchedComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    TowatchModule,
    HttpClientModule,
    FlexModule,
    MatInputModule,
    FormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
