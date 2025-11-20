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
  movies: Movie[] = []
  selectedMovie!: Movie;
  selectedMovieId: string =''
  movieDetails: any;
  
  constructor(private movieService: MovieService){

  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      // Only process when user pauses for this amount of time
      debounceTime(300),
      // Only process if the new value is different from the last one, ie no useless api call
      distinctUntilChanged(),
      // SwitchMap receives the value from valueChanges, cancels prev ongoing API request, starts a new observable (API Call)
      switchMap(query => this.movieService.searchMovies(query))
    ).subscribe((results: any) => {
      this.movies = results.results
    })
  }


  // accepts event from user searching/typing
  // Remember though, the users movie serach will be sent through to the tmdb api...
  applyFilter(event: Event) : void{
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase()

  }

  selectMovie(movie: string){
    this.movieService.searchMovies(movie).subscribe(data => {
      this.movieDetails = data
    }
    )
    
    // this.getMovieId(movie)
    this.console(this.movieService.searchMovies(movie).subscribe(data => {
      this.movieDetails = data
    }
    ))
    
  //  return this.selectedMovie = movie;
   
  }

  getMovieId(movieTitle: string){
    return this.movieService.searchOneMovie(movieTitle).subscribe(data  => {
      this.movieDetails = data;
    })
  }

  console(thing: any){
    console.log(thing)
  }

  

}
