import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { WatchedComponent } from './watched/watched/watched.component';
import { ToWatchComponent } from './towatch/to-watch/to-watch.component';
import { ReviewsComponent } from './reviews/reviews/reviews.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path:'watched', component:WatchedComponent},
  {path:'towatch', component:ToWatchComponent},
  {path: 'review', component:ReviewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
