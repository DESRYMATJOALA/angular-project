
import { Component,OnInit } from '@angular/core';
import  {ContactUSModel} from './contact-us.model';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   title = 'Welcome to gallery page';
  public showHomeSection:boolean;
  public showContactUSSection:boolean;
  public contactUsUserList:Array<ContactUSModel> = new Array<ContactUSModel>();
  public deletecontactUsUserList:Array<ContactUSModel>=new Array<ContactUSModel>(); 
  public name:string;
  public mobileNumber:number;
  public comment:string;
  public gender :string;
  public  hearAboutUs: string;
  public date:Date;
  public currency:number;
  public UserServerDataList = [];
  
  constructor(private userService:UserService){}  

  ngOnInit(){
    debugger;
    this.userService.getUserDataList().subscribe(response=>{
      let responseData:any = response;
      responseData = JSON.parse(responseData._body);            
      this.contactUsUserList = responseData.userList;
    });
  }

  gotoPageSection(section:string){
    if(section === 'ContactUs'){
      this.showHomeSection = true;
      this.showContactUSSection = false;
    }else   {
      this.showHomeSection = false;
      this.showContactUSSection = true;
    }
  }

  submitForm(){
    debugger;
    this.date = new Date();
        this.currency = 100000.00
    this.contactUsUserList.push({name:this.name,mobileNumber:this.mobileNumber,
      comment:this.comment,gender:this.gender,
      hearAboutUs:this.hearAboutUs,
      date:this.date,
      currency:this.currency 
  });
  
    this.name = '';
    this.mobileNumber = null;
    this.comment = '';
    this.gender=' ';
    this.hearAboutUs=' ';
    
    
  }
  deleteRow(rowIndex){
    //this.contactUsUserList.splice(rowIndex,1);
    if(confirm("Are you sure to delete ")) {
      this.contactUsUserList.splice(rowIndex,1);
      console.log(rowIndex);}
  }
  
}
    



