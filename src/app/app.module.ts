import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { PlayerlogComponent } from './playerlog/playerlog.component';
import { HttpClientModule } from '@angular/common/http';
import { LoglineComponent } from './logline/logline.component';
import { GeoseriesComponent } from './geoseries/geoseries.component';
import { HeadsearchComponent } from './headsearch/headsearch.component';
import { FiltercomposerComponent } from './filtercomposer/filtercomposer.component';
import { LobbyComponent } from './lobby/lobby.component';
import { HdsearchComponent } from './hdsearch/hdsearch.component';
import { SpecialComponent } from './special/special.component';
import { FullogsComponent } from './fullogs/fullogs.component';
import { AdmlogsComponent } from './admlogs/admlogs.component';
import { ProcesslogComponent } from './processlog/processlog.component';
import { ChartsComponent } from './charts/charts.component';
import { IconComponent } from './icon/icon.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorComponent } from './error/error.component';

import {PipesModule} from './pipes/pipes.module'

@NgModule({
  declarations: [
    AppComponent,
    PlayerlogComponent,
    LoglineComponent,
    GeoseriesComponent,
    HeadsearchComponent,
    FiltercomposerComponent,
    LobbyComponent,
    HdsearchComponent,
    SpecialComponent,
    FullogsComponent,
    AdmlogsComponent,
    ProcesslogComponent,
    ChartsComponent,
    IconComponent,
    SettingsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    PipesModule.forRoot()
  ],
  providers: [{ provide: StorageBucket, useValue: environment.firebase.storageBucket }],
  bootstrap: [AppComponent]
})
export class AppModule { }
