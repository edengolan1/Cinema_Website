import { Component } from '@angular/core';
import { DeleteMovieComponent } from '../../components/delete-movie/delete-movie.component';

@Component({
  selector: 'app-page-delete-movie',
  standalone: true,
  imports: [ DeleteMovieComponent],
  templateUrl: './page-delete-movie.component.html',
  styleUrl: './page-delete-movie.component.css'
})
export class PageDeleteMovieComponent {

}
