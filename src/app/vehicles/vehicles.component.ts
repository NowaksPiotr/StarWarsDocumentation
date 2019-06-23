import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit{
  activeTabIndex: number = 0;
  apiService: ApiService;
  activatedRoute: ActivatedRoute;
  type: string = 'vehicles';


  constructor(apiService: ApiService, activatedRoute: ActivatedRoute) {
    this.apiService = apiService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.apiService.pageFetcher(this.type, params.page);
    })
  }
  handleClick(tabIndex) {
    this.activeTabIndex = tabIndex;
  }
}