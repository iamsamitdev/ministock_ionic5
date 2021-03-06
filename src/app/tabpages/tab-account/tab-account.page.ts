import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

// ConstantService
import { ConstantService } from '../../services/constant.service';

@Component({
  selector: 'app-tab-account',
  templateUrl: './tab-account.page.html',
  styleUrls: ['./tab-account.page.scss'],
})
export class TabAccountPage implements OnInit {

  // สร้างตัวแปรไว้เก็บมูลผู้ใช้
  imgProfile: any;
  fullname:any;
  username:any;

  imgURL:any;

  constructor(
    private constant: ConstantService,
    private storage: Storage,
  ) { 

      this.imgURL = this.constant.baseImageURL+"profile/"

      this.storage.get('LoginPicprofile').then((res) => {
        this.imgProfile = res;
      });

      this.storage.get('LoginFullname').then((res) => {
        this.fullname = res;
      });

      this.storage.get('LoginUsername').then((res) => {
        this.username = res;
      });

  }

  ngOnInit() {
  }

  Logout(){


    // เมื่อทำการ logout ลบข้อมูล storage ออก
    this.storage.remove('LoginStatus');
    this.storage.remove('LoginFullname');
    this.storage.remove('LoginUsername');
    this.storage.remove('LoginPicprofile');

    this.storage.get('LoginPicprofile').then((result) => {
      if(result == null){
        window.location.reload();
      }
    });

  }

}
