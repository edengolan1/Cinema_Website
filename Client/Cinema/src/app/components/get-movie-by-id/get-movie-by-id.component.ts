import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap , Router} from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../Services/movie.service';
import { CommonModule } from '@angular/common';
import { LengthSummaryPipe } from '../../pipes/length-summary.pipe';
import { SearchComponent } from '../header/search/search.component';

@Component({
  selector: 'app-get-movie-by-id',
  standalone: true,
  imports: [CommonModule, LengthSummaryPipe, SearchComponent],
  templateUrl: './get-movie-by-id.component.html',
  styleUrl: './get-movie-by-id.component.css'
})
export class GetMovieByIdComponent {

  movie?: Movie;
  constructor(private movieservice: MovieService, private activatedRouter: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void{
    this.activatedRouter.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get("id"));
      this.movieservice.getmovie(id)
      .subscribe(movie => this.movie = movie);
    });
  }
}
