import { Component , Output, EventEmitter, Input} from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../Services/movie.service';
import { CommonModule , ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { LengthSummaryPipe } from '../../pipes/length-summary.pipe';
import { EnumToTextPipe } from '../../pipes/enum-to-text.pipe';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [CommonModule, LengthSummaryPipe, EnumToTextPipe],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {
  @Input() movies: Movie[] = [];
  @Input() displayGetMovieById: boolean = true;
  @Input() displayDelete: boolean = false;
  @Output() movieClicked: EventEmitter<Movie> = new EventEmitter<Movie>();
  
  constructor(private movieService: MovieService, private router: Router,private viewportScroller: ViewportScroller){}
  
  ngOnInit(){
    this.movieService.getmovies()
    .subscribe(movie => this.movies = movie)
  }

  getMovieById(movie: Movie){
    if (this.displayGetMovieById){
      this.router.navigate(['/movies',movie.id]);
    }
  }

  editMovie(movie: Movie){
    this.movieClicked.emit(movie);
    this.viewportScroller.scrollToPosition([0, 0]);
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