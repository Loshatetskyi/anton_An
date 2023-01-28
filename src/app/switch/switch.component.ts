import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  aud:string[]=[];
  car:any;
  audiModels:Array <string> = ['Audi A3','Audi A5','Audi A7'];
  bmwModels:Array <string> = [];

  constructor(private audiService:AudiServise) {

  }
  addCar(name:string){
      this.audiService.addDate(name);
  }
  ngOnInit(){

  }
}

