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
  private searchUrl = "https://api.themoviedb.org/3/search/movie"
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.tmdbToken}`
    })
  };

  constructor(private http: HttpClient) { }

  searchMovie(search: string) : Observable<JSON>{
    console.log(this.http.get<JSON>(`${this.searchUrl}?query=${search}`, this.httpOptions))
    return this.http.get<JSON>(`${this.searchUrl}?query=${search}`, this.httpOptions)

  }

  dummyTest(search: string) : Observable<JSON>{
    console.log(this.http.get<JSON>(`${this.searchUrl}?query=${search}`, this.httpOptions))
    return this.http.get<JSON>(`${this.searchUrl}?query=${search}`, this.httpOptions)

  }
}
