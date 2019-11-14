import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToyotaService {

  constructor() {
   }
   toyota=[
     {name:'corola',prise:150,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMRaRBIIuTm0oCshdGlF4YXkgoxPfXeclH51-nI6ipzcRdPnhN"},
     {name:'prius',prise:200,img:"https://img.wcdn.co.il/f_auto,w_300/1/0/3/8/1038040-46.jpg"}
   ];

   indexx=0;
   arrindex=this.toyota[this.indexx];

}
