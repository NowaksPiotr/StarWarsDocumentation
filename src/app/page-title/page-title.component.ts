import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  quotes = [
    'AAaaaaAaaargh   ~ Chewbacca',
    'Such a great site it is...mmmm   ~ Master Yoda',
    'This IS the page you are looking for...   ~ Obi Wan Kenobi',
    'Roger, roger.   ~ Droid',
    'Beep beep beeeep beep   ~ R2D2',
    'Luke... I AM your Parent Component   ~ Darth Angular',
    'Don\'t underestimate the power of Angular   ~ Frontend Master'
  ]
  randomQuote: string
  ngOnInit() {
    setInterval(()=>{
    this.randomQuote = this.quotes[Math.floor(Math.random()*this.quotes.length)];
    }, 10000);
  }

}
