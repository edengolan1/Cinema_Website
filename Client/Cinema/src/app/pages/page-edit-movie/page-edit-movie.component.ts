import { Component } from '@angular/core';
import { EditMovieComponent } from '../../components/edit-movie/edit-movie.component';

@Component({
  selector: 'app-page-edit-movie',
  standalone: true,
  imports: [EditMovieComponent],
  templateUrl: './page-edit-movie.component.html',
  styleUrl: './page-edit-movie.component.css'
})
export class PageEditMovieComponent {

}
