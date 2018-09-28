import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';

import { CamelizePipe } from 'ngx-pipes';

import { MapService } from './map.service';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    AgmCoreModule.forRoot({
      //   apiKey: 'AIzaSyAhjW8XgUxytacj3ReGvU862GZq1P8Qhss'
      // apiKey: 'AIzaSyA24WzgEfGVPDlLFIS-qtW3LK5oR2SN6qI'
      apiKey: 'AIzaSyA9I84FNpAq4J9CF5ueWLj21XXwLrLkM_0'
    }),
    CommonModule
  ],
  providers: [MapService, CamelizePipe]
})
export class MapModule {}
