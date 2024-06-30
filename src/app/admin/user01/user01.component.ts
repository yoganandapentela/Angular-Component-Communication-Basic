import { Component } from '@angular/core';
import { ViewServiceService } from 'src/app/shared/view-service.service';

@Component({
  selector: 'app-user01',
  templateUrl: './user01.component.html',
  styleUrls: ['./user01.component.css']
})
export class User01Component {
  trueOrFlase!:any;
   constructor(private ViewService:ViewServiceService ){}
   ngOnInit():void{
    //this.onSubmit()
   }
   onSubmit(){
    this.trueOrFlase=true;
      this.ViewService.updateProfilePic(this.trueOrFlase);
   }
}
