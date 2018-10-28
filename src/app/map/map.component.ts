import { Input, Component, OnInit } from '@angular/core';
import { stations } from '../../assets/data/stations.js';
import { iconsLocation } from '../../assets/data/iconsLocation.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() latGet;
  @Input() lngGet;
  @Input() idOpen;
  @Input() memoryActionGet;
  markers: any;
  constructor() { }
  icon = iconsLocation;

  getActiveOpen(i) {
    if (i !== this.idOpen) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.markers = stations;
  }
}
