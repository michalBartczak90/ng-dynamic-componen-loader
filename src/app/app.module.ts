import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DynamicComponentLoaderModule } from 'app/utils/dynamic-component-loader/dynamic-component-loader.module';
import { DYNAMIC_COMPONENT_MANIFESTS } from 'app/dynamic-modules';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicComponentLoaderModule.forRoot(DYNAMIC_COMPONENT_MANIFESTS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
