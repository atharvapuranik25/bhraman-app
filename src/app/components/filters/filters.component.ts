import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  constructor(private router: Router) {}


  onSubmit() {
    const city = (<HTMLInputElement>document.getElementById("city")).value;
    const startDate = (<HTMLInputElement>document.getElementById("startDate")).value;
    const returnDate = (<HTMLInputElement>document.getElementById("returnDate")).value;
    const passengers = (<HTMLInputElement>document.getElementById("passengers")).value;
    const budget = (<HTMLInputElement>document.getElementById("budget")).value;
    const travelPref = (<HTMLInputElement>document.getElementById("travelPref")).value;
    
    localStorage.setItem('city', city);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('returnDate', returnDate);
    localStorage.setItem('passengers', passengers);
    localStorage.setItem('budget', budget);
    localStorage.setItem('travelPref', travelPref);

    this.router.navigate(['/itinerary-component']);
  }

}
