import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {

  // สร้างตัวแปรมารับค่าจากการ scan
  QRSCAN_DATA: string;
  isOn = false;

  constructor(private qrScanner: QRScanner) { }

  ngOnInit(){}

  ScanQRCode(){
    // alert("OK");
    // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted
        this.isOn = true;

        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
          this.isOn = false;
          this.QRSCAN_DATA = text;
          
          if(this.QRSCAN_DATA !== ''){
            this.closeScanner();
            scanSub.unsubscribe();
          }
          
        });

        this.qrScanner.show();

      } else if (status.denied) {
        this.qrScanner.openSettings();
      } else {
       
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }

  closeScanner(){
    this.isOn = false;
    this.qrScanner.hide();
    this.qrScanner.destroy();
  }

}
