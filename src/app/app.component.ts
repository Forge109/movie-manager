import { Component } from '@angular/core';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieService } from './movies/movie.service';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; // Load all Features
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig } from '@angular/router-deprecated'
import { WelcomeComponent } from './home/welcome.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],

  directives: [ROUTER_DIRECTIVES],
  providers: [MovieService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
  { path: '/movies', name: 'Movies', component: MovieListComponent }
])
export class AppComponent {
  title: string = 'My Movie Manager';

  constructor(router: Router){
    
  }
}
