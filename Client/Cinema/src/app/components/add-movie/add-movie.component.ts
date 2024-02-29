import { Component } from '@angular/core';
import { PageAddMovieComponent } from '../../pages/page-add-movie/page-add-movie.component';
import { SearchComponent } from '../header/search/search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../Services/movie.service';
import { Router } from '@angular/router';
import { Genre } from '../../enums/genre.enum';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [PageAddMovieComponent, SearchComponent, FormsModule, CommonModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
  newMovie: Movie;
  movies: Movie[] = [];
  genres: string[] = ['Romantic Comedy','Action','Children','Comedy','Drama'];
  submitted: boolean = false;

  constructor(private movieservice: MovieService, private router: Router){
    this.newMovie = new Movie()
  }

  ngOnInit(){
    this.movieservice.getmovies()
    .subscribe(movie => this.movies = movie)
  }

  Submit(){
    this.movieservice.addMovie(this.newMovie)
    .subscribe(_ => {
      this.router.navigate(['/movies']);
    });
  }

  errorsSubmitted(){
    this.submitted = true;
  }
  isValidDateSelected(): boolean {
    const selectedDate = new Date(this.newMovie.premiereDate);
    const today = new Date();
    return !isNaN(selectedDate.getTime()) && selectedDate <= today;
  }
}
