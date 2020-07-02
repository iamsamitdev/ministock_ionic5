import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    // สร้างตัวแปรไว้รับค่าจากฟอร์ม
    userData = {
      'fullname': '',
      'email': '',
      'tel': '',
      'password': ''
    }

  constructor(public router: Router, public alert: AlertController) { }

  ngOnInit() {
  }

  submitRegister(){
    if(this.userData.fullname != '' && this.userData.email != '' && this.userData.password != ''){
      this.router.navigateByUrl('/tabs/tablinks/tab-home');
    }else{
      this.presentAlert('ป้อนข้อมูลลงทะเบียนให้ครบก่อน');
    }
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
