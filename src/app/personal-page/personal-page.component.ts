import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent {
  name:string = 'Антон';
  date:string = '20.09.1998';
  city:string = 'Хмельницький';
  work:string = 'ТОВ Нова пошта';
  old:number = 24;
  dateNow:any = moment().fromNow();
  new_date:any = moment('1998-9-20');
  rs:any 
  

  constructor(){
    this.rs = (this.new_date.diff(moment().format(), 'year'))*(-1);
  }


}

