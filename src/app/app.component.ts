import { ContactComponent } from './contact-us/contact.component';
import { AboutUsComponent } from './about-us/aboutUs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'angular-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name='welcome to our home page'
  name2=' click top right button for more information ';
  sum=0;
  public showHomeSection:boolean;
  public showContactUSSection:boolean;
  public showGallerySection:boolean;
  public showAboutUSSection:boolean;
  constructor(private route:Router){
   this.sum=this.Addition(3,4);
  }
  Addition(a,b){
    return a+b;
  }

  gotoPageSection(section:string){
    if(section === 'Home'){
      // this.showHomeSection = true;
      // this.showContactUSSection = false;
      // this.showGallerySection=false;
      // this.showAboutUSSection=false;
      this.route.navigate(['/home']);
    } else if(section === 'Contact-us')  {
      //this.showHomeSection = false;
     // this.showContactUSSection = true;
      //this.showGallerySection=false;
      //this.showAboutUSSection=false;
      this.route.navigate(['/contact-us']);
    }else if(section=='gallery'){
     //this.showHomeSection = false;
     // this.showContactUSSection = false;
     // this.showGallerySection=true;
     // this.showAboutUSSection=false;
     this.route.navigate(['/gallery']);

    }else{
     // this.showHomeSection = false;
     // this.showContactUSSection = false;
     // this.showGallerySection=false;
     // this.showAboutUSSection=true;
     this.route.navigate(['/about-us']);
    }

    }


}
