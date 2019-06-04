import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message.component';
import { DynamicComponentLoaderModule } from 'app/utils/dynamic-component-loader';

@NgModule({
  imports: [
    CommonModule,
    DynamicComponentLoaderModule.registerComponent(MessageComponent)
  ],
  declarations: [MessageComponent],
  entryComponents: [MessageComponent]
})
export class MessageModule {}
