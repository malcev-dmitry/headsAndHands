import { Component, OnInit } from '@angular/core';
import { stations } from '../assets/data/stations.js';
import { data } from '../assets/data/data.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() {}

  // google maps zoom level
  zoom = 12;

  // initial center position for the map
  lat = 59.9434483211;
  lng = 30.3601813316;

  markers: any;

  ngOnInit() {
    this.markers = stations;
    console.log(data);
  }
}
