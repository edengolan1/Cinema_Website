import { Component } from '@angular/core';
import { GetMovieByIdComponent } from '../../components/get-movie-by-id/get-movie-by-id.component';

@Component({
  selector: 'app-information-movie',
  standalone: true,
  imports: [GetMovieByIdComponent],
  templateUrl: './information-movie.component.html',
  styleUrl: './information-movie.component.css'
})
export class InformationMovieComponent {

}
