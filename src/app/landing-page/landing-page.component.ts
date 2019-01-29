import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
declare var google;
// import {SlideshowModule} from 'ng-simple-slideshow';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  orgDetails: AngularFireList<any>;
  Orgs: Observable<any[]>
  key;
  dbPath
  email;
  OrganizationKey;
  organizationArr = [];
  latestOrgs = [];
  oldOrgs = [];

  myImages = ["../../assets/imgs/dummy data/1.JPG", "../../assets/imgs/dummy data/2.JPG", "../../assets/imgs/dummy data/3.JPG",
    "../../assets/imgs/dummy data/4.JPG", "../../assets/imgs/dummy data/5.JPG", "assets/imgs/change.png"
  ];

  constructor(private authen: AngularFireAuth, private db: AngularFireDatabase, private _ngZone: NgZone) { }

  ngOnInit() {

    this.dbPath = 'OrganizationList';
    this.orgDetails = this.db.list(this.dbPath);
    console.log(this.orgDetails)
    this.Orgs = this.orgDetails.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    this.Orgs.subscribe(x => {
      this.organizationArr = x;
      var totLength = x.length - 3;
      for (var i = 0; i < x.length; i++) {
        if (i >= totLength) {
          this.latestOrgs.push(this.organizationArr[i]);
        }
        else {
          this.oldOrgs.push(this.organizationArr[i])
        }
      }
      console.log(this.organizationArr)
    })


    this.initMap();
  }

  initMap() {


    this.dbPath = 'OrganizationList';
    this.orgDetails = this.db.list(this.dbPath);
    console.log(this.orgDetails)
    this.Orgs = this.orgDetails.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    this.Orgs.subscribe(x => {
      this.organizationArr = x
      console.log(this.organizationArr)
    })
    setTimeout(() => {

      let myLatLng = { lat: this.organizationArr[0].latitude, lng: this.organizationArr[0].longitude };
      // this.objectArray = "test"
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: myLatLng,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8ec3b9"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1a3646"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#64779e"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#334e87"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6f9ba5"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3C7680"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#304a7d"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2c6675"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#255763"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#b0d5ce"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3a4762"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#0e1626"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#4e6d70"
              }
            ]
          }
        ],



      });
      for (var x = 0; x < this.organizationArr.length; x++) {
        console.log("inside");
        let myLatLng = { lat: this.organizationArr[x].latitude, lng: this.organizationArr[x].longitude };
        let marker = new google.maps.Marker({
          position: myLatLng,
          // icon:"../assets/imgs/pink.png",
          size: { width: 5, height: 5 },
          map: map,
          title: this.organizationArr[x].OrganizationName,

        });

        var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent" *ngFor="let a of organizationArr">'+
        '<img src="assets/imgs/download.jpg">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '</div>'+
        '</div>';

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.addListener('click', function () {
          infowindow.open(map, marker);
         
        });
    

      }
    }, 3000);


    console.log("at the end");
    // })



  }




}