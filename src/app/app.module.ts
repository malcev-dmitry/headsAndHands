import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAV9K407CU2MmhhSLzQKan-biJH8s9_mXE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
