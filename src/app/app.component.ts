import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();

      // เช็คว่าผู้ใช้มีการ login ไว้แล้วหรือยัง
      this.storage.get('LoginStatus').then((result) => {
        if(result){
          // เคยเข้าใช้งาน
          // ส่งไปหน้า home
          this.router.navigateByUrl('tabs/tablinks/tab-home');
        }else{
          // ถ้ายังไม่ได้เข้าระบบ ให้ส่งไปหน้า login
          this.router.navigateByUrl('login');
        }
      });

    });
  }
}
