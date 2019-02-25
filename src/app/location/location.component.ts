import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pm-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  pageTitle="Locations"
  longitude = -122.310878;
  latitude = 37.5711577;
  constructor() { }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(37.5711577,-122.310878),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
     
    
      
  }
  let marker = new google.maps.Marker({ 
    draggable: true,
    animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(this.latitude, this.longitude),
      map: this.map,//set map created here
        title:"DilKhush-Indian Gourmet Food"
      });
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    marker.setMap(this.map);
    
  }

}
