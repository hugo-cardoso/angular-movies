import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { MOVIES } from "./mock-movies";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getMovies() : Observable<Array<object>> {
    return of(MOVIES);
  }
}