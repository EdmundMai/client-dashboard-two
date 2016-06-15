import { Component, OnInit } from '@angular/core';
import './rxjs-operators';
import { UgcBannerComponent } from './components/ugc-banner/index';
import { BubbleComponent } from './components/bubble/index';
import { EngagementTableComponent } from './components/engagement-table/index';
import { ViewEncapsulation } from '@angular/core';

import { EngagementStatService } from './services/engagement-stat.service';
import { EngagementStat } from "./models/engagement-stat";

@Component({
  moduleId: module.id,
  selector: 'client-dashboard-two-app',
  templateUrl: 'client-dashboard-two.component.html',
  styleUrls: ['client-dashboard-two.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [UgcBannerComponent, BubbleComponent, EngagementTableComponent],
  providers: [EngagementStatService]
})
export class ClientDashboardTwoAppComponent implements OnInit {
  constructor(private _engagementStatService: EngagementStatService) {}

  errorMessage: string;
  public fianceData: EngagementStat;

  ngOnInit() {
    this.getEngagementStat();
  }

  getEngagementStat() {
    this._engagementStatService.getEngagementStat()
      .subscribe(
        engagementStat => this.fianceData = engagementStat,
        error =>  this.errorMessage = <any>error);
  }
}
