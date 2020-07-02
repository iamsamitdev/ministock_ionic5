import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

// เรียกใช้งาน Web API
import { WebapiService } from '../../services/webapi.service';

// เรียกใช้งาน Model
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // สร้างตัวแปรไว้รับค่าจากฟอร์ม
  userData = {
    'username': '',
    'password': ''
  }

  constructor(
    public router: Router, 
    public alert: AlertController,
    public api: WebapiService) { }

  ngOnInit() {
  }

  submitLogin(){
     // ตรวจข้อมูลการ Login
    this.api.checkLogin(this.userData).subscribe(res => {
        console.log(res);
        if(res['status'] == 'success'){
          // ส่งไปหน้า tabs
          this.router.navigateByUrl('tabs/tablinks/tab-home');
        } else {
          // alert('login fail!');
          this.presentAlert('ข้อมูลเข้าระบบไม่ถูกต้อง');
        }
      }, (err) => {
        console.log(err);
      });

  }

  // สร้างกล่องแจ้งเตือน (AlertDialog)
  async presentAlert(msg){
    const alert = await this.alert.create({
      header: 'แจ้งเตือน',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

}
