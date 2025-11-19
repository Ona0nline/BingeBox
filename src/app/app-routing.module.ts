import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { WatchedComponent } from './watched/watched/watched.component';
import { ToWatchComponent } from './towatch/to-watch/to-watch.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path:"watched", component:WatchedComponent},
  {path:"towatch", component:ToWatchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
