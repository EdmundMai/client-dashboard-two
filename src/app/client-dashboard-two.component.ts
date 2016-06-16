import { Component, OnInit } from '@angular/core';
import './rxjs-operators';
import { UgcBannerComponent } from './components/ugc-banner/index';
import { BubbleComponent } from './components/bubble/index';
import { EngagementTableComponent } from './components/engagement-table/index';
import { ViewEncapsulation } from '@angular/core';
import { FianceDataService } from './services/fiance-data.service';
import { FianceData } from "./models/fiance-data";

@Component({
  moduleId: module.id,
  selector: 'client-dashboard-two-app',
  templateUrl: 'client-dashboard-two.component.html',
  styleUrls: ['client-dashboard-two.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [UgcBannerComponent, BubbleComponent, EngagementTableComponent],
  providers: [FianceDataService]
})
export class ClientDashboardTwoAppComponent implements OnInit {
  constructor(private _fianceDataService: FianceDataService) {}

  errorMessage: string;
  public fianceData: FianceData;

  ngOnInit() {
    this.getFianceData();
  }

  getFianceData() {
    this._fianceDataService.getFianceData()
      .subscribe(
        fianceData => this.fianceData = fianceData,
        error =>  this.errorMessage = <any>error);
  }
}
