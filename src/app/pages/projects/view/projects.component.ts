import {
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { MessageComponent } from 'app/dynamic-modules/message/message.component';
import { DynamicComponentLoaderService } from 'app/utils/dynamic-component-loader';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @ViewChild('messageOutlet', {read: ViewContainerRef, static: false}) messageOutlet: ViewContainerRef;

  constructor(
    private dynamicComponentLoaderService: DynamicComponentLoaderService
  ) {}

  loadComponent() {
    this.dynamicComponentLoaderService.loadComponent(MessageComponent)
      .then(componentFactory => this.messageOutlet.createComponent(componentFactory));
  }
}
