import { Component , HostListener} from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PageAddMovieComponent } from '../../pages/page-add-movie/page-add-movie.component';
import { AddMovieComponent } from '../add-movie/add-movie.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchComponent, PageAddMovieComponent, AddMovieComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hover: boolean = false

  constructor(private router: Router){}
  showTheAdmin(): void{
    this.hover= true;
  }
  hideTheAdmin(): void{
    this.hover = false;
  }
  goToTheAllMovie(): void{
    this.router.navigate(['/movies']);
  }
  addMovie(): void{
    this.router.navigate(['/movies/:id/addMovie']);
  }
  DeleteMovie(): void{
    this.router.navigate(['/movies/:id/deleteMovie']);
  }
  editMovie(): void{
    this.router.navigate(['/movies/:id/editMovie']);
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    const adminElement = document.querySelector('.admin');
    if (!adminElement?.contains(clickedElement)) {
      this.hideTheAdmin();
    }
  }
}
