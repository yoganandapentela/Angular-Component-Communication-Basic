import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewServiceService } from 'src/app/shared/view-service.service';

@Component({
  selector: 'app-auth01',
  templateUrl: './auth01.component.html',
  styleUrls: ['./auth01.component.css']
})
export class Auth01Component implements OnInit,OnDestroy{
  profilePic:any;
  displayMsg!:any;
constructor(private ViewService:ViewServiceService){}
  public profileSub!:Subscription;

  ngOnInit():void{
    this.profileSub=this.ViewService.currentProfilePic.subscribe(res=>
      {
        this.profilePic=res;
        if(this.profilePic==true)
          {
            this.display();
          }
      });
  }
  display(){
    this.displayMsg="success message from Users comp to Auth comp through observable";
  }
  ngOnDestroy(): void {
    // Unsubscribe from the subscription to avoid memory leaks
    if (this.profileSub) {
      this.profileSub.unsubscribe();
    }
  }
}
