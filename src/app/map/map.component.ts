import { Input, Component, OnInit } from '@angular/core';
import { stations } from '../../assets/data/stations.js';
import { iconsLocation } from '../../assets/data/iconsLocation.js';
import { GetSortedDataService } from '../service/get-sorted-data.service';
import { data } from '../../assets/data/data.js';
import * as _ from 'lodash';

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

  lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(69,153,139,1)',
      borderColor: 'rgba(69,153,139,1)'
    }];

  markers: any;

  constructor(private getSortedData: GetSortedDataService) {}

  icon = iconsLocation;
  getData: (id: string) => any = _.memoize(this.getSortedData.getSortedData);
  sizeIcon: number = 2;
  time: string[] = [];

  sizeIconMetro(i: number) {
    if (i === this.idOpen) {
      this.sizeIcon = 3;
    }
    if (i !== this.idOpen) {
      this.sizeIcon = 2;
    }
    return this.sizeIcon;
  }

  getIdOpen(i: number) {
    if (i !== this.idOpen) {
      return false;
    }
    if (i === this.idOpen) {
      return true;
    }
  }

  getTime() {
    for (let i = 0; i < (data.checkins_timestamps).length; i++) {
      this.time.push(data.checkins_timestamps[i].time);
    }
  }

  ngOnInit() {
    this.markers = stations;
    this.getTime();
  }
}
