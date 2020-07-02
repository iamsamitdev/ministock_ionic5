import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

// เรียกใช้งาน Web API
import { WebapiService } from '../../services/webapi.service';

// การเรียกใช้งาน Model
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
    public api: WebapiService
  ) { }

  ngOnInit() {
  }

  submitLogin(){
     // ตรวจข้อมูลการ Login
     this.api.checkLogin(this.userData).subscribe(res => {
        if(res['status'] == 'success'){
          // เข้าสู่ระบบถูกต้อง ส่งไปหน้า tab_home
          this.router.navigateByUrl('tabs/tablinks/tab-home');
        }else{
          // เข้าสู่ระบบไม่ถูกต้อง
          this.presentAlert('ข้อมูลเข้าระบบไม่ถูกต้อง');
        }
     }); 
  }

  // สร้างกล่องแจ้งเตือน (AlertDialog)
  async presentAlert(msg){
    const alert = await this.alert.create({
      header: 'แจ้งเตือน',
      message: msg,
      buttons: ['ปิดหน้าต่าง']
    });
    await alert.present();
  }

}
