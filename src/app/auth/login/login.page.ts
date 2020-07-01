import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // สร้างตัวแปรไว้รับค่าจากฟอร์ม
  userData = {
    'email': '',
    'password': ''
  }

  constructor(public router: Router, public alert: AlertController) { }

  ngOnInit() {
  }

  submitLogin(){
     // ตรวจข้อมูลการ Login
     if(this.userData.email == 'user@email.com' && this.userData.password == '1234'){
       // เข้าสู่ระบบถูกต้อง ส่งไปหน้า tab_home
       this.router.navigateByUrl('tabs/tablinks/tab-home');
     }else{
       // เข้าสู่ระบบไม่ถูกต้อง
       // alert('ข้อมูลเข้าระบบไม่ถูกต้อง');
       this.presentAlert('ข้อมูลเข้าระบบไม่ถูกต้อง');
     }
  }

  // สร้างกล่องแจ้งเตือน (AlertDialog)
  async presentAlert(msg){
    const alert = await this.alert.create({
      header: 'Login Status',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

}
