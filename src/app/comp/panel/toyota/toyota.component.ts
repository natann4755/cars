import { Component, OnInit } from '@angular/core';
import { ToyotaService } from '../../../toyota.service';

@Component({
  selector: 'app-toyota',
  templateUrl: './toyota.component.html',
  styleUrls: ['./toyota.component.css']
})
export class ToyotaComponent implements OnInit {

  constructor(public sertoyota:ToyotaService) { 
    
  }

  ngOnInit() {
  }

}
