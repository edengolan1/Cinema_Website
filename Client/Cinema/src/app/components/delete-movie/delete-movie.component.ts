import { Component } from '@angular/core';
import { ListMoviesComponent } from '../list-movies/list-movies.component';

@Component({
  selector: 'app-delete-movie',
  standalone: true,
  imports: [ListMoviesComponent],
  templateUrl: './delete-movie.component.html',
  styleUrl: './delete-movie.component.css'
})
export class DeleteMovieComponent {
  
}
