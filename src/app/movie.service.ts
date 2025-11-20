import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private token = environment.tmdbToken
  private searchManyUrl = "https://api.themoviedb.org/3/search/movie"
  private searchOneUrl = "https://api.themoviedb.org/3/movie"
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.tmdbToken}`
    })
  };

  constructor(private http: HttpClient) { }

  searchMovies(search: string) : Observable<JSON>{
    console.log(this.http.get<JSON>(`${this.searchManyUrl}?query=${search}`, this.httpOptions))
    return this.http.get<JSON>(`${this.searchManyUrl}?query=${search}`, this.httpOptions)

  }

  searchOneMovie(movieId: string): Observable<JSON>{
    return this.http.get<JSON>(`${this.searchOneUrl}/${movieId}`, this.httpOptions)

  }

  getMovieDetails(id: string) : Observable<any>{
    return this.http.get<any>(`${this.searchOneUrl}/${id}`, this.httpOptions)

  }


}
