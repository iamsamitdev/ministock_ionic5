import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// เรียกใช้งาน Web API
import { WebapiService }  from '../services/webapi.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

    // รับค่า id จากหน้า product
    getid:any;

    // ตัวแปรไว้เก็บข้อมูลสินค้าจาก web api
    productData = {
      id: '',
      product_name: '',
      product_detail: '',
      product_barcode: '',
      product_price: '',
      product_category: '',
      product_date: '',
      product_image: ''
    }

  constructor(
    public router: Router,
    public api: WebapiService,
    public acRoute: ActivatedRoute
  ) { 
    this.getid = this.acRoute.snapshot.params['id'];
  }

  ngOnInit() {
    // alert(this.getid);
    this.api.getProductByID(this.getid).subscribe(response => {
      this.productData.product_name = response[0].product_name;
      this.productData.product_detail = response[0].product_detail;
      this.productData.product_barcode = response[0].product_barcode;
      this.productData.product_price = response[0].product_price;
      this.productData.product_category = response[0].product_category;
      this.productData.product_date = response[0].product_date;
      this.productData.product_image = response[0].product_image;
    });
  }

}
