import { Injectable, Inject } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable, map } from 'rxjs';
import { BASE_SERVER_URL } from '../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient ,@Inject(BASE_SERVER_URL) private baseURL: string) { }

  getmovies(): Observable<Movie[]>{
    return this.http.get(`${this.baseURL}/movies`)
      .pipe(map((res) => <Movie[]>(res)));
  }
  getmovie(id: number): Observable<Movie>{
    return this.http.get(`${this.baseURL}/movies/${id}`)
      .pipe(map((res)=> <Movie>(res)))
  }
  searchMoviesByName(name: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseURL}/movies/search?name=${name}`);
  }
  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post(`${this.baseURL}/movies`, movie)
        .pipe(map((res) => <Movie>(res)));
  }
  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/movies/${id}`);
  }
  upDateMovie(movie: Movie): Observable<Movie>{
    return this.http.put(`${this.baseURL}/movies/${movie.id}`,movie)
      .pipe(map((res)=> <Movie>(res)));
  }
}