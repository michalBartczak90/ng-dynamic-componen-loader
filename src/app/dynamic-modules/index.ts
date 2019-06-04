import * as cuid from 'cuid';

import { DynamicComponentManifest } from 'app/utils/dynamic-component-loader';

import {MessageComponent} from 'app/dynamic-modules/message/message.component';

export const DynamicComponent = {
  MessageComponent
};

export const DYNAMIC_COMPONENT_MANIFESTS: DynamicComponentManifest[] = [
  {
    componentClass: DynamicComponent.MessageComponent,
    path: cuid(),
    loadChildren: './dynamic-modules/message/message.module#MessageModule'
  }
];

