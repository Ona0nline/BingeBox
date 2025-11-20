import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToWatchComponent } from './to-watch/to-watch.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [ToWatchComponent],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule, 
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatOptionModule, MatRippleModule
  ]
})
export class TowatchModule { }
