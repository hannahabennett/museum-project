// museum.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, of } from 'rxjs';

import { Museums } from '../_models/museum';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MuseumService {
  private visitorUrl = 'http://localhost:1234/api/visitors';

    constructor(private http: HttpClient) { }
  
    getVisitors(): Observable<Museums[]> {
      console.log(this.http.get<Museums[]>(this.visitorUrl))
      return this.http.get<Museums[]>(this.visitorUrl)

    }

    addVisitor(visitor: Museums): Observable<Museums> {
      return this.http.post<Museums>(this.visitorUrl, visitor, httpOptions);
    }



    /** DELETE: delete the hero from the server */
// deleteVisitor (visitor: Museums | string): Observable<Museums> {
//   const id = typeof visitor === 'string' ? visitor : visitor._id;
//   const url = `${this.visitorUrl}/${id}`;

//   return this.http.delete<Museums>(url, httpOptions).pipe(
//     tap(_ => this.log(`deleted visitor id=${id}`)),
//     catchError(this.handleError<Museums>('deleteHero'))
//   );
// }
//   handleError<T>(arg0: string): (err: any, caught: Observable<Museums>) => import("rxjs").ObservableInput<any> {
//     throw new Error("Method not implemented.");
//   }
//   log(arg0: string): void {
//     throw new Error("Method not implemented.");
//   }
    // deleteVisitor(id) {
    //   return this
    //             .http
    //             .get(`${this.visitorUrl}/delete/${id}`);
    // }
    // deleteVisitor(visitor: Museums): Observable<Museums[]> {
      // const id = visitor._id;
      // const url= `${this.visitorUrl}/${id}`;

      // return this.http.delete<Museums[]>(this.visitorUrl, httpOptions);
    // }
 

 
 
  }
  