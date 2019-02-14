import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class Movies implements OnInit {

  movies = [];
  selectedMovie = '';

  constructor(private moviesService: MoviesService) {}

  getMovies() : void {
    this.moviesService
      .getMovies()
      .subscribe(movies => this.movies = movies);
  }

  onSelect(movie:any) : void {
    this.selectedMovie = movie;
  }

  ngOnInit() {
    this.getMovies();
  }
}
