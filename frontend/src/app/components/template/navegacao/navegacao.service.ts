// import { navData } from './navegacao-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class navService {
  navData: any;

//   private _navData = new BehaviorSubject<navData>({
//     title: 'Início',
//     icon: 'home',
//     routeUrl: '',
// })

//   constructor() { }

//   get navData(): navData {
//     return this._navData.value
//   }

//   set navData(navData: navData) {
//     this._navData.next(navData)
//   }
 
}

export interface navData {
  title: string
  routeUrl: string
}
