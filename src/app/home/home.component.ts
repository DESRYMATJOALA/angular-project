import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  name='welcome to angular project';
    function1;
    sum=0;
    product=0;
    factories=0;
    public showConcatenationColumn = true;
    public weekDayList = [];
    constructor(){}

    ngOnInit(){
      setTimeout(() => {
        this.showConcatenationColumn = false;
      }, 2000);
      this.function1=this.concatenation("desry","matjoala");
      this.sum=this.Addition(3,6);
      this.product=this.Multiplication(3,4);
      this.factories=this.factorial(7);
      this.weekDayList = ['monday','Tuesday','Wednesday','Thursday'];
    }

  
  
  concatenation(stry1,stry2){
    
     return stry1.concat(stry2.toString());
   
  
    }
    
  Addition(a,b){
    return a+b;
  }
   Multiplication(x,y) {
     return x*y;
   }
   factorial(number) {
    if (number <= 0) {         // termination case
       return 1; 
    } else {     
       return (number * this.factorial(number - 1));     // function invokes itself
    }}
    
  
    } 
    


    
 
  

