import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  activeTabIndex: number = 0;
  apiService: ApiService;
  activatedRoute: ActivatedRoute;
  type: string ='people';
  page: number;


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