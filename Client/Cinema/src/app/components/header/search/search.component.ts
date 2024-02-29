import { Component } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../Services/movie.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  movies: Movie[] = [];
  searchTerm: string = ''; 
  
  constructor(private movieService: MovieService, private router: Router){}
  searchMovies(searchTerm: string): void {
    if (searchTerm.trim()) {
      this.movieService.searchMoviesByName(searchTerm).subscribe(movies => {
        this.movies = movies;
      });
    } else {
      this.movies = [];
    }
  };

  getMovieById(movie: Movie){
    this.router.navigate(['/movies',movie.id]);
  }
}
