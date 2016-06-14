import { Component } from '@angular/core';
import { UgcBannerComponent } from './components/ugc-banner/index';
import { BubbleComponent } from './components/bubble/index';
import { EngagementTableComponent } from './components/engagement-table/index';
import { ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'client-dashboard-two-app',
  templateUrl: 'client-dashboard-two.component.html',
  styleUrls: ['client-dashboard-two.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [UgcBannerComponent, BubbleComponent, EngagementTableComponent]
})
export class ClientDashboardTwoAppComponent {
  public fianceData = {
    engagements_count: 517000,
    engagements_forecast: 3000000,
    potential_imps_count: 71000000,
    potential_imps_forecast: 20000000000,
    start_date: new Date(),
    riv: 2.5
  };
}
