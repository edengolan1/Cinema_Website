import { Component } from '@angular/core';
import { ListMoviesComponent } from '../list-movies/list-movies.component';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../Services/movie.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [ListMoviesComponent, CommonModule, FormsModule],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {
  movies?: Movie;
  displayEdit: boolean = false;

  constructor(private movieservice: MovieService,private router: Router,private activatedRoute: ActivatedRoute){}
  editMovie(movie: Movie){
    this.displayEdit = true;
    this.router.navigate(['/movies',movie.id,'editMovie'])
  }

  ngOnInit(): void{
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get("id"));
      if(!isNaN(id))
      {          
        this.movieservice.getmovie(id)
          .subscribe(movie => {
            this.movies = movie;
          });
      }
    })
  }
  
  detailsOfMovie(form: NgForm,id:number,name:string,genre:string,cinema:string,summary:string,viewLimit:number,premiereDate:Date,srcImage:string){
      if(this.movies){
        this.movies.name = name;
        this.movies.genre = genre;
        this.movies.cinema = cinema;
        this.movies.summary = summary;
        this.movies.viewLimit = viewLimit;
        this.movies.premiereDate = premiereDate;
        this.movies.srcImage = srcImage;
        console.log(this.movies?.name,this.movies?.id,this.movies?.genre,this.movies?.cinema,this.movies?.summary
          ,this.movies?.premiereDate,this.movies?.viewLimit,this.movies?.srcImage);
        this.movieservice.upDateMovie(this.movies)
          .subscribe(_ => {
            this.router.navigate(['/movies']);
          })
    }
  }
  parseDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    console.log(year, month, day)
    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
        return new Date(year, month - 1, day);
    } else {
        console.error('Invalid date format:', dateString);
        return new Date();
    }
  }
}