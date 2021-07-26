import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutUs',
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./aboutUs.component.css']
})
export class AboutUsComponent implements OnInit {
 
  name='welcome to angular project';
  public weekDayList = [];
    constructor(){}

    ngOnInit(){
     
      
      
    }

}
  