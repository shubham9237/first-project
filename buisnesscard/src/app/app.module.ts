import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared-module"
import { FlexLayoutModule } from '@angular/flex-layout';
import { BodyComponent } from './home/body/body.component';
import { ConnectComponent } from './home/body/connect/connect.component';
import { ServicesComponent } from './home/body/services/services.component';
import { GalleryComponent } from './home/body/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    BodyComponent,
    ConnectComponent,
    ServicesComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
