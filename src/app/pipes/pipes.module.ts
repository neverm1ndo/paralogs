import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortPipe } from '../sort.pipe';
import { DeathReasonsPipe } from '../death-reasons.pipe';
import { SleepPipe } from '../sleep.pipe';
import { BanReasonsPipe } from '../ban-reasons.pipe';
import { HdPipe } from '../hd.pipe';
import { PreprocPipe } from '../preproc.pipe';
import { AdmsPipe } from '../adms.pipe';
import { FileSizePipe } from '../file-size.pipe';

@NgModule({
  declarations: [
    SortPipe,
    DeathReasonsPipe,
    SleepPipe,
    BanReasonsPipe,
    HdPipe,
    PreprocPipe,
    AdmsPipe,
    FileSizePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SortPipe,
    DeathReasonsPipe,
    SleepPipe,
    BanReasonsPipe,
    HdPipe,
    PreprocPipe,
    AdmsPipe,
    FileSizePipe
  ],
  exports: [
    SortPipe,
    DeathReasonsPipe,
    SleepPipe,
    BanReasonsPipe,
    HdPipe,
    PreprocPipe,
    AdmsPipe,
    FileSizePipe
  ]
})
export class PipesModule {
  static forRoot() {
      return {
          ngModule: PipesModule,
          providers: [],
      };
   }
}
