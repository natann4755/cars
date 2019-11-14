import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  public corectpanel = 'toyota'
  constructor() { 
    console.log("servpage"+this.corectpanel)
  }

}
