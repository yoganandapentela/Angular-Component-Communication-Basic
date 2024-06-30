import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {

  constructor() { }
  // Initialize with a default user (or null)
  public profilePicSource = new BehaviorSubject<string>('');
  currentProfilePic=this.profilePicSource.asObservable();

  updateProfilePic(newProfilePic:any){
    this.profilePicSource.next(newProfilePic);
  }

}
