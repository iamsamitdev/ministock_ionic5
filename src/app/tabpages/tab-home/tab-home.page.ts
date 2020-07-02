import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebapiService }  from '../../services/webapi.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  //  สร้างตัวแปรไว้เก็บข้อมูลจาก API
  productData: any;

  constructor(
    public api: WebapiService,
    public router: Router
  ) {
    this.productData = [];
  }

  segnav = 'instocks';

  slideOption = {
    initialSlide: 0,
    slidePerView: 1,
    autoplay: true
  }

  ngOnInit() {
    this.api.getProduct().subscribe(res => {
      this.productData = res;
    });
  }

  // ฟังก์ชันเปิดหน้ารายละเอียดสินค้า
  showProductDetail(id){
    // เปิดหน้า product-detail
    this.router.navigateByUrl('product-detail/'+id);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      // อัพเดทหน้า page
      this.api.getProduct().subscribe(res => {
        this.productData = res;
      });
      event.target.complete();
    }, 3000);
  }

}
