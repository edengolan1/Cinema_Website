import { Component } from '@angular/core';
import { ListMoviesComponent } from '../../../components/list-movies/list-movies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListMoviesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
