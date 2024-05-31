import { JsonPipe, NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import {MatTabsModule} from '@angular/material/tabs';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-tabs',
    template: `
    tabs {{ tabs | json }}
    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
     <a *ngFor="let tab of tabs"> {{ tab.title }} </a>
    </nav>

    <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
    `,
    standalone: true,
    imports: [MatTabsModule, NgFor, JsonPipe]
})
export class TabsComponent {
    private activatedRoute = inject(ActivatedRoute);

    readonly tabs = (this.activatedRoute.routeConfig?.children ?? [])
      .filter((route) => route.data?.['tab'] === true)
      .map(({ title, path }) => ({ title, path: path as string }));
}