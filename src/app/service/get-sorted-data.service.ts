import { Injectable } from '@angular/core';
import { data } from '../../assets/data/data.js';

@Injectable({
  providedIn: 'root'
})

export class GetSortedDataService {

  constructor() { }

  getSortedData(id: string): any[] {
    const stationCheckins = [];
    for (let i = 0; i < (data.checkins_timestamps).length; i++) {
      const sortedData = data.checkins_timestamps[i].stations_checkins_count.find((item) => item.id_station === id);
      if (!!sortedData) {
        stationCheckins.push(sortedData.count);
      }
    }
    return [{data: stationCheckins, label: 'Количество кликов за период времени'}];
  }
}
