import {Injectable, Inject, NgModuleFactoryLoader, Injector, Type, ComponentFactory} from '@angular/core';

import { DynamicComponentManifest, DYNAMIC_COMPONENT_MANIFESTS} from './dynamic-component.model';

@Injectable()
export class DynamicComponentLoaderService {

  constructor(
    @Inject(DYNAMIC_COMPONENT_MANIFESTS) private manifests: DynamicComponentManifest[],
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) { }

  loadComponent<T extends Type<any>>(componentClass: T, injector?: Injector): Promise<ComponentFactory<T>> {
    const manifest = this.manifests.find(compManifest => componentClass === compManifest.componentClass);

    if (!manifest) {
      throw new Error(`Missing manifest definition for ${componentClass.name}`);
    }

    return this.loader.load(manifest.loadChildren)
      .then(ngModuleFactory => ngModuleFactory.create(injector || this.injector))
      .then(ngModuleRef =>
         ngModuleRef.componentFactoryResolver.resolveComponentFactory(manifest.componentClass)
      );
  }
}
