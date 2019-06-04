import {
  ANALYZE_FOR_ENTRY_COMPONENTS,
  ModuleWithProviders,
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader,
  Type
} from '@angular/core';
import {ROUTES} from '@angular/router';

import { DYNAMIC_COMPONENT_MANIFESTS, DynamicComponentManifest } from './dynamic-component.model';
import { DynamicComponentLoaderService } from './dynamic-component-loader.service';

@NgModule()
export class DynamicComponentLoaderModule {

  static forRoot(manifests: DynamicComponentManifest[]): ModuleWithProviders {
    return {
      ngModule: DynamicComponentLoaderModule,
      providers: [
        DynamicComponentLoaderService,
        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
        { provide: ROUTES, useValue: manifests, multi: true },
        { provide: DYNAMIC_COMPONENT_MANIFESTS, useValue: manifests}
      ]
    };
  }

  static registerComponent(component: Type<any>): ModuleWithProviders {
    return {
      ngModule: DynamicComponentLoaderModule,
      providers: [
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          useValue: component,
          multi: true
        }
      ]
    };
  }

}
