import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        FlexModule,
        MatInputModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatCardModule
  ]
})
export class HomeModule { }
