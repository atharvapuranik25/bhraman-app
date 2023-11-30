import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(
    private modalService: NgbModal,
    public authService: AuthService,
    ) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  

}
