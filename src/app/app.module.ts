import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { MapComponent } from './map/map.component';
import { MenuRightPanelComponent } from './right-panel/menu-right-panel/menu-right-panel.component';
import { IconsSocialNetworksComponent } from './right-panel/icons-social-networks/icons-social-networks.component';
import { InfoAdvertisingComponent } from './right-panel/info-advertising/info-advertising.component';
import { CityComponent } from './right-panel/city/city.component';
import { TringleComponent } from './right-panel/city/tringle/tringle.component';

@NgModule({
  declarations: [
    AppComponent,
    RightPanelComponent,
    MapComponent,
    MenuRightPanelComponent,
    IconsSocialNetworksComponent,
    InfoAdvertisingComponent,
    CityComponent,
    TringleComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDO-tKm2LntlEevZFhn9KTyjn3JqaHtYbc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
