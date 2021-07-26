import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 
  name='welcome to angular project';
  public myImages =[];
  
    constructor(){}

    ngOnInit(){
     
     this.myImages=['assets/images/picture1.png'  ,'assets/images/picture2.png'  ,'assets/images/picture3.png'  ,'assets/images/picture4.png'] ;
      
    }

}
  

    