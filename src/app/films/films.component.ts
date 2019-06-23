import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../services/api.service';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit{
  activeTabIndex: number = 0;
  apiService: ApiService;
  activatedRoute: ActivatedRoute;
  type: string = 'films';


  constructor(apiService: ApiService, activatedRoute: ActivatedRoute) {
    this.apiService = apiService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.apiService.pageFetcher(this.type, params.id);
  })
}
  handleClick(tabIndex) {
    this.activeTabIndex = tabIndex;
  }
}