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
import { SortPipe } from './sort.pipe';
import { LoglineComponent } from './logline/logline.component';
import { GeoseriesComponent } from './geoseries/geoseries.component';
import { DeathReasonsPipe } from './death-reasons.pipe';
import { SleepPipe } from './sleep.pipe';
import { HeadsearchComponent } from './headsearch/headsearch.component';
import { BanReasonsPipe } from './ban-reasons.pipe';
import { FiltercomposerComponent } from './filtercomposer/filtercomposer.component';
import { HdPipe } from './hd.pipe';
import { LobbyComponent } from './lobby/lobby.component';
import { HdsearchComponent } from './hdsearch/hdsearch.component';
import { PreprocPipe } from './preproc.pipe';
import { AdmsPipe } from './adms.pipe';
import { SpecialComponent } from './special/special.component';
import { FileSizePipe } from './file-size.pipe';
import { FullogsComponent } from './fullogs/fullogs.component';
import { AdmlogsComponent } from './admlogs/admlogs.component';
import { ProcesslogComponent } from './processlog/processlog.component';
import { ChartsComponent } from './charts/charts.component';
import { IconComponent } from './icon/icon.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerlogComponent,
    SortPipe,
    LoglineComponent,
    GeoseriesComponent,
    DeathReasonsPipe,
    SleepPipe,
    HeadsearchComponent,
    BanReasonsPipe,
    FiltercomposerComponent,
    HdPipe,
    LobbyComponent,
    HdsearchComponent,
    PreprocPipe,
    AdmsPipe,
    SpecialComponent,
    FileSizePipe,
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
    AngularFireStorageModule
  ],
  providers: [{ provide: StorageBucket, useValue: environment.firebase.storageBucket }],
  bootstrap: [AppComponent]
})
export class AppModule { }
