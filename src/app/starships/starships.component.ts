import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent{
  activeTabIndex: number = 0;
  apiService: ApiService;
  activatedRoute: ActivatedRoute;
  type: string = 'starships';


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