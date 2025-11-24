import { Component } from '@angular/core';
import { GoogleGenAI } from "@google/genai";
import { log } from 'console';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/movie.service';
import { environment } from 'src/environments/environment';

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
  finalMovies: any = []
  movieDetails: any;
  selectedMovieImageUrl = '';
  selectedMovieDescription = ''
  selectedMovieTitle = ''
  selectedMovieId = 0


  ai = new GoogleGenAI({
    apiKey: environment.geminiApiKey,
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
        model: "gemini-2.0-flash",
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
      this.displayRecommendations(this.aiResponse)
    } catch (error) {
      console.error('Error generating content:', error);
    } finally{
      this.loading = false
    }
  }

  // Need to first make the movie calls to find those movies
  displayRecommendations(recommendationsString: string){
  this.recommendations = recommendationsString.split(",").map(m => m.trim());
  console.log("recommendations: ", this.recommendations)

  for (let recommendation of this.recommendations){
    console.log("Searching for:", recommendation)
    // Call searchMovies, which will internally call selectedMovieDetails when ready
    this.searchMovies(recommendation)
  }
}

searchMovies(title: string){ 
  this.movieService.searchMovies(title).subscribe(data => {
     this.movies = data;
     console.log("Movies fetched for:", title, this.movies.results)

     if (!this.movies.results || this.movies.results.length === 0){
       console.warn("No results found for:", title)
       return;
     }

     // Find the movie whose title exactly matches the AI recommendation
     const matchingMovie = this.movies.results.find(
       (       m: { original_title: string; }) => m.original_title.toLowerCase() === title.toLowerCase()
     );

     if (!matchingMovie){
       console.warn("No exact match found for:", title)
       return;
     }
     console.log("Matching movie",matchingMovie)

     // Set selectedMovieId and call details
     console.log("Matching moveies id: ", matchingMovie.id)
     this.selectedMovieId = matchingMovie.id
     this.selectedMovieDetails(this.selectedMovieId)
  }) 
}

selectedMovieDetails(movieId: number){
  this.movieService.searchOneMovie(movieId).subscribe(data  => {
    this.movieDetails = data;
    this.finalMovies.push(this.movieDetails) // ✅ fix append -> push
    this.selectedMovieImageUrl = this.movieDetails.poster_path
    this.selectedMovieDescription = this.movieDetails.overview
    this.selectedMovieTitle = this.movieDetails.title

    console.log("Final list of movies: " ,this.finalMovies)
  })
}


}
