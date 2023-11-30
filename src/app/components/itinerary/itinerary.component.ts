import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent {
  
  newdata: any;
  cityLabel: string = "";

  constructor(
    private _apiservice: ApiService,
    ) { }

  ngOnInit() {
    this.getData();
    this.cityLabel = localStorage.getItem('city') || "";
  }

  getData(){

    const data = {
      city: localStorage.getItem('city'),
      startDate: localStorage.getItem('startDate'),
      returnDate: localStorage.getItem('returnDate'),
      passengers: localStorage.getItem('passengers'),
      budget: localStorage.getItem('budget'),
      travelPref: localStorage.getItem('travelPref'),
    }

    console.log(data);

    this._apiservice.getdata(data).subscribe(res=>{
      this.newdata=res;
      console.log(this.newdata);
    })
  }

}
