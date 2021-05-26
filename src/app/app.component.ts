import { HomeComponent } from './home.component';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-app',
  templateUrl: './app.component.html',
  styleUrls: ['./home.component.css']
})
export class AppComponent {
  title = 'app works!';
  name='welcome to angular project';
  sum=0;
  public showHomeSection:boolean;
  public showContactUSSection:boolean;
  constructor(){
   this.sum=this.Addition(3,4);
  }
  Addition(a,b){
    return a+b;
  }

  gotoPageSection(section:string){
    if(section === 'Home'){
      this.showHomeSection = true;
      this.showContactUSSection = false;
    }else{
      this.showHomeSection = false;
      this.showContactUSSection = true;
    }
  }

}
