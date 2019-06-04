import {InjectionToken, Type} from '@angular/core';

export const DYNAMIC_COMPONENT_MANIFESTS = new InjectionToken<any>('DYNAMIC_COMPONENT_MANIFESTS');

export interface DynamicComponentManifest {
  path: string;
  loadChildren: string;
  componentClass: Type<any>;
}
