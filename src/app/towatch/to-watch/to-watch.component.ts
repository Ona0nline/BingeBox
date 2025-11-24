import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/movie.service';


@Component({
  selector: 'app-to-watch',
  templateUrl: './to-watch.component.html',
  styleUrls: ['./to-watch.component.css']
})
export class ToWatchComponent implements OnInit {

  searchControl = new FormControl();
  movies: any = []
  lastMovieSelected: string = '';
  selectedMovieId: number = 0
  movieDetails: any;
  selectedMovieImageUrl = '';
  selectedMovieDescription = ''
  selectedMovieTitle = ''
  
  constructor(private movieService: MovieService){

  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      // Only process when user pauses for this amount of time
      // debounceTime(200),
      // Only process if the new value is different from the last one, ie no useless api call
      distinctUntilChanged(),
      // SwitchMap receives the value from valueChanges, cancels prev ongoing API request, starts a new observable (API Call)
      switchMap(query => this.movieService.searchMovies(query))
    ).subscribe((results: any) => {
      this.movies = results.results
      console.log("Movies on site: ", this.movies)
    })
  }


  applyFilter(event: Event) : void{
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase()

  }

  selectMovie(movie: Movie){
    this.selectedMovieDetails(movie.id)
    this.selectedMovieId = movie.id
    console.log("Movie Id: ", movie.id)
   
  }

  selectedMovieDetails(movieId: number){

    return this.movieService.searchOneMovie(movieId).subscribe(data  => {
      this.movieDetails = data;
      this.selectedMovieImageUrl = this.movieDetails.poster_path
      this.selectedMovieDescription = this.movieDetails.overview
      this.selectedMovieTitle = this.movieDetails.title
      console.log("Movie Details ",this.movieDetails)
    })
    
  }

  searchMovies(movie: string){ 
    this.movieService.searchMovies(movie).subscribe(data => {
       this.movies = data 
      }) 
    }

  onEnter(){
    
    if(this.lastMovieSelected){
      this.selectedMovieDetails(this.selectedMovieId)
      console.log(this.selectedMovieId)
    }
  }
  

}
