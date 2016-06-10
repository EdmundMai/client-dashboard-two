import { Component } from '@angular/core';
import { UgcBannerComponent } from './ugc-banner/ugc-banner.component';
import { BubbleComponent } from './bubble/bubble.component';
import { EngagementTableComponent } from './engagement-table/engagement-table.component';

@Component({
  moduleId: module.id,
  selector: 'client-dashboard-two-app',
  templateUrl: 'client-dashboard-two.component.html',
  styleUrls: ['client-dashboard-two.component.css'],
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
