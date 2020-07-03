import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// กำหนดตัวแปรสำหรับโหลดแผนที่
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  // กำหนดพิกัด lat / lon
  latitude:any;
  longitude:any;

  @ViewChild('mapElement', {static: true}) mapElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.latitude = 13.826971;
    this.longitude = 100.592007;

    const myLatlng = new google.maps.LatLng(this.latitude, this.longitude);
    const mapOptions = {
      zoom: 16,
      center: myLatlng,
      mapTypeId: 'roadmap'
    };
    
    const map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // การปักหมุดลงบนแผนที่
    const marker = new google.maps.Marker({
      position: { lat: this.latitude, lng: this.longitude },
      map: map,
      title: 'ไอทีจีเนียส',
      icon: {url: 'assets/icon/marker.png', scaledSize: new google.maps.Size(80,80)}
    });

    // การกำหนดข้อความให้แสดงบน marker
    const infowindow = new google.maps.InfoWindow({
      content: '<div id="content"><h1>สถาบันไอทีจีเนียส</h1><p>รับจัดอบรม สัมนา และบริการด้านไอที</p></div>',
      maxWidth: 400
    });

    // เรียกแสดงผลข้อความตอนโหลดแผนที่
    infowindow.open(map, marker);

    // เรียกแสดงผลเมื่อคลิ๊กที่ marker
    marker.addListener('click', function(){
      infowindow.open(map, marker);
    });
    
  }

}
