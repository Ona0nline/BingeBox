import { Component } from '@angular/core';
import { GoogleGenAI } from "@google/genai";
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  description: string = '';
  aiResponse: string = ''; 
  loading: boolean = false;
  recommendations: string[] = []
  movies: any = []
  movieDetails: any;


  ai = new GoogleGenAI({
    apiKey: 'AIzaSyAhGhAC4C90ks6A4vgFSxI-7kMGt2U29ng',
    // works?
  });

  constructor(private movieService: MovieService){

  }

  async geminirecs() {
  this.loading = true;
    if (!this.description.trim()) {
      console.warn('Please enter a mood!');
      return;
    }

    try {
      let response: any = await this.ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: [
          {
            text: "You are a helpful AI that gives movie recommendations based on the mood that the user has described. You respond with a string of maximum 10 movies and minimum 2 movies that match that mood. You respond with a string of movies separated by commas with no extra text or context. Just the titles."
          },
          {
            text: this.description
          }
        ],
      });

      this.aiResponse = response.text; 
      console.log(this.aiResponse)
    } catch (error) {
      console.error('Error generating content:', error);
    } finally{
      this.loading = false
    }
  }

  // Need to first make the movie calls to find those movies
  displayRecommendations(recommendations: string){
    this.recommendations = recommendations.split(",")

    for (let recommendation of recommendations){
      this.searchMovies(recommendation)
      // take a bet and take the first one
      this.selectedMovieDetails(this.movies[0].id)
      console.log("Success??")

    }
  }

  searchMovies(movie: string){ 
    this.movieService.searchMovies(movie).subscribe(data => {
       this.movies = data 
      }) 
    }

    selectedMovieDetails(movieId: number){
    return this.movieService.searchOneMovie(movieId).subscribe(data  => {
      this.movieDetails = data;
      console.log("Movie Details ",this.movieDetails)
    })
    
  }
}
