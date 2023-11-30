import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bhraman';
  newdata: any;

  constructor(
    private modalService: NgbModal,
    private _apiservice: ApiService,

    ) { }

    ngOnInit() {
      
      }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  // getData() {
  //   this._apiservice.getdata().subscribe(res=>{
  //     this.newdata=res;
  //     console.log(this.newdata);
  //   })
  //   }
}
