import { Component, OnInit } from '@angular/core';
import { Museums } from '../_models/museum';
import { MuseumService } from '../_services/museum.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-visitor-data',
  templateUrl: './visitor-data.component.html',
  styleUrls: ['./visitor-data.component.css']
})
export class VisitorDataComponent implements OnInit {
  // visitor : Museums[];
  visitors : Museums[];
  submitted = false;
  message: string;


  constructor(private museumService: MuseumService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getVisitors();
    const id = this.route.snapshot.paramMap.get('id');
    // this.museumService.getVisitors(id)
    //   .subscribe(visitors => this.visitors = visitors);
  }

  getVisitors() {
    return this.museumService.getVisitors()
               .subscribe(
                 visitors => {
                  console.log(visitors);
                  this.visitors = visitors;
                 }
                );
  }

  // delete(id,i) {
  //   console.log(i);
  //   console.log(id);
  //   this.museumService.deleteVisitor(id).subscribe(res => {
  //     console.log(res);
  //     console.log('Deleted');
  //   });
  // }

  // delete(visitor: Museums): void {
  //   this.visitors = this.visitors.filter(v => v !== visitor);
  //   this.museumService.deleteVisitor(visitor).subscribe();
  // }

}
