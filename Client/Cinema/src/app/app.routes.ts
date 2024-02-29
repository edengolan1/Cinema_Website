import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home/home.component';
import { InformationMovieComponent } from './pages/information-movie/information-movie.component';
import { PageAddMovieComponent } from './pages/page-add-movie/page-add-movie.component';
import { PageDeleteMovieComponent } from './pages/page-delete-movie/page-delete-movie.component';
import { PageEditMovieComponent } from './pages/page-edit-movie/page-edit-movie.component';

export const routes: Routes = [
    { path: '', redirectTo: 'movies' , pathMatch: 'full' },
    { path: 'movies', component: HomeComponent },
    { path: 'movies/:id', component: InformationMovieComponent },
    { path: 'movies/:id/addMovie', component: PageAddMovieComponent },
    { path: 'movies/:id/deleteMovie', component: PageDeleteMovieComponent },
    { path: 'movies/:id/editMovie', component: PageEditMovieComponent }
];