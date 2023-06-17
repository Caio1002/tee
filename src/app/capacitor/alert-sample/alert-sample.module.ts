import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertSamplePageRoutingModule } from './alert-sample-routing.module';

import { AlertSamplePage } from './alert-sample.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    AlertSamplePageRoutingModule
  ],
  declarations: [AlertSamplePage]
})
export class AlertSamplePageModule {}
