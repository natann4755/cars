import { Component, OnInit } from '@angular/core';
import { MazdaService } from '../../../mazda.service';

@Component({
  selector: 'app-mazda',
  templateUrl: './mazda.component.html',
  styleUrls: ['./mazda.component.css']
})
export class MazdaComponent implements OnInit {

  constructor(public sermazda:MazdaService) {
    
   }

  ngOnInit() {
  }

}
