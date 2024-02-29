import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../Services/movie.service';
import { Movie } from '../../models/movie.model';
import { LengthSummaryPipe } from '../../pipes/length-summary.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-movie',
  standalone: true,
  imports: [ CommonModule, LengthSummaryPipe],
  templateUrl: './delete-movie.component.html',
  styleUrl: './delete-movie.component.css'
})
export class DeleteMovieComponent {
  movies: Movie[] = [];
  constructor(private movieService: MovieService, private router: Router){}

  ngOnInit(){
    this.movieService.getmovies()
    .subscribe(movie => this.movies = movie)
  }
  
  getMovieById(movie: Movie){
    this.router.navigate(['/movies',movie.id]);
  }

  deleteMovie(id: number){
    this.movieService.deleteMovie(id).subscribe(() => {
      console.log(`Movie with id ${id} deleted successfully.`);
      this.router.navigate(['/movies']);
    }, error => {
      console.error('Error deleting movie:', error);
    });    
  }
}
