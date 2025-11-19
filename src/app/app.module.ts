import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { WatchedComponent } from './watched/watched/watched.component';
import { ToWatchComponent } from './towatch/to-watch/to-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchedComponent,
    ToWatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
