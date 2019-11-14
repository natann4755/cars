import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../page.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public page:PageService) { }

  ngOnInit() {
  }
  navto(carpag:string):void{
    console.log("nav to "+carpag)
    this.page.corectpanel=carpag;
    console.log("page"+this.page.corectpanel)
  }
}
