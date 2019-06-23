import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent {
  activeTabIndex: number = 0;
  apiService: ApiService;
  activatedRoute: ActivatedRoute;
  type: string = 'species';


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
