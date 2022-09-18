import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';

import { ActivityService } from './services/activity.service';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from '../routes';


@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
