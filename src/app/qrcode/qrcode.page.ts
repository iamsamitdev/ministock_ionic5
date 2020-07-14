import { Component, OnInit } from '@angular/core';
// import { ZBar, ZBarOptions  } from '@ionic-native/zbar/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {

  // สร้างตัวแปรมารับค่าจากการ scan
  // options: ZBarOptions = {
  //   text_title: "", // Android only
  //   text_instructions: "หันกล้องให้ตรงกับ qrcode", // Android only
  //   camera: "back", // defaults to "back"
  //   flash: 'off',
  //   drawSight: true
  // }

  options: BarcodeScannerOptions = {
    preferFrontCamera : false, // iOS and Android
    showFlipCameraButton : true, // iOS and Android
    showTorchButton : true, // iOS and Android
    prompt : "Place a barcode inside the scan area", // Android
    orientation : "portrait", // landscape
    disableSuccessBeep: false // iOS and Android
  }

  scannedResult:any;

  constructor(
    private barcodeScanner: BarcodeScanner
    // private zbar: ZBar
    ) { }

  ngOnInit(){}

  scanCode(){

  //   this.zbar.scan(this.options)
  //  .then(result => {
  //     console.log(result); // Scanned code
  //     this.scannedResult = result;
  //  })
  //  .catch(error => {
  //     alert(error); // Error message
  //  });

    this.barcodeScanner.scan(this.options).then(barcodeData => {
      //console.log('Barcode data', barcodeData);
      this.scannedResult = barcodeData.text;
    }).catch(err => {
        console.log('Error', err);
    });

  }

}
