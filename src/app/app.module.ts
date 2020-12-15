import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarPageComponent } from './bar-page/bar-page.component';
import { PiePageComponent } from './pie-page/pie-page.component';
import { ScatterPageComponent } from './scatter-page/scatter-page.component';
import { RainbowPageComponent } from './rainbow-page/rainbow-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BarPageComponent,
    PiePageComponent,
    ScatterPageComponent,
    RainbowPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
