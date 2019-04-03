import { Component } from '@angular/core';
import {Router} from '@angular/router'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Museums } from '../_models/museum';
import { MuseumService } from '../_services/museum.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-moundville-visitor',
  templateUrl: './moundville-visitor.component.html',
  styleUrls: ['./moundville-visitor.component.css']
})
export class MoundvilleVisitorComponent  {
  // moundvilleForm: FormGroup;
  // loading = false;

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
  
  //   ngOnInit() {
  //     this.moundvilleForm = this.formBuilder.group({
  //         firstName: ['', Validators.required],
  //         lastName: ['', Validators.required],
  //         emailAddress: ['', Validators.required],
  //         zipCode: ['', Validators.required],
  //         groupSize: [''],
  //         howDidYouHearAboutUs: [''],
  //         country: ['', Validators.required],
  //         guestType: ['', Validators.required],
  //         className: [''],
  //         professorName: [''],
  //         emailUpdates: ['']
  //     });
  //   }
  // onSubmit(moundvilleForm) {
  //   console.log(moundvilleForm.value);
  //   console.log("Moundville form submitted successfully.");
  //   this.moundvilleForm.reset();
  // }
