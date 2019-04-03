import { Component } from '@angular/core';
import {Router} from '@angular/router'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Museums } from '../_models/museum';
import { MuseumService } from '../_services/museum.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-gorgas-visitor',
  templateUrl: './gorgas-visitor.component.html',
  styleUrls: ['./gorgas-visitor.component.css']
})
export class GorgasVisitorComponent  {
  submitted = false;
  visitor = new Museums();

  constructor(private router: Router,
    private museumService: MuseumService,
    private location: Location) {     }

    newVisitor(): void {
      this.submitted = false;
      this.visitor = new Museums();
    }

    addVisitor() {
      this.submitted = true;
      this.save();
    }

    goBack(): void {
      this.location.back();
    }

    private save(): void {
      console.log(this.visitor);
      this.museumService.addVisitor(this.visitor)
      .subscribe();
    }
  }
