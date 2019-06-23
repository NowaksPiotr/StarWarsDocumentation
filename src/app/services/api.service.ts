import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwapiResponse } from '../interfaces/swapi-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient: HttpClient;
  public swapiResponse: SwapiResponse;
  public pages: Array<number> = [];

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   public pageFetcher(
    type: string = '',
    page: number = 1
  ): void {
    this.pages = [];
    this.swapiResponse = null;
    this.httpClient
    .get(`https://swapi.co/api/${type}/?page=${page}`)
    .toPromise()
    .then((json: SwapiResponse) => {
      this.swapiResponse = json;
      const pages = Math.ceil(this.swapiResponse.count/10);
      for(let i=1; i<= pages; i++){
        this.pages.push(i);
      }
    })
    .catch(err =>{
      alert('I sense disturbance in the server... (404)');
    })
  }
}