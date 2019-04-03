import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { UserService } from '../_services';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class AdminHomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  gorgasAdmin = false;
  moundvilleAdmin = false;
  transportationAdmin = false;
  pauljonesAdmin = false;

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (this.currentUser.id == 2) {
        this.gorgasAdmin = true;
        console.log('User is 2');
      } else if (this.currentUser.id == 3) {
        this.moundvilleAdmin = true;
        console.log('User is 3');
      } else if (this.currentUser.id == 4) {
        this.transportationAdmin = true;
        console.log('User is 4');
      }else if (this.currentUser.id == 5) {
        this.pauljonesAdmin = true;
        console.log('User is 5');
      }
    }
  }
  ngOnInit() { }



}