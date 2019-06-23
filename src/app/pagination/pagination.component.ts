import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})

export class PaginationComponent implements OnInit {
  @Input() type: string;  
  apiService: ApiService;

  constructor(apiService: ApiService){
    this.apiService = apiService;
  }

  ngOnInit(){
  }
}