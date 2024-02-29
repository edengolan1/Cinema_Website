import { Component } from '@angular/core';
import { AddMovieComponent } from '../../components/add-movie/add-movie.component';

@Component({
  selector: 'app-page-add-movie',
  standalone: true,
  imports: [AddMovieComponent],
  templateUrl: './page-add-movie.component.html',
  styleUrl: './page-add-movie.component.css'
})
export class PageAddMovieComponent {

}
