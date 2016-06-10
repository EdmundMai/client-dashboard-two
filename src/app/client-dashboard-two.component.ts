import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'client-dashboard-two-app',
  templateUrl: 'client-dashboard-two.component.html',
  styleUrls: ['client-dashboard-two.component.css']
})
export class ClientDashboardTwoAppComponent {
  public brand = { name: "Amope" };
  public ugc = [{
    photo_link: "http://www.beautyandfashiontech.com/wp-content/uploads/2014/11/amope.jpg",
    full_name: "Katrina K.",
    state: "NY",
  }];


  public fianceData = {
    engagements_count: 517000,
    engagements_forecast: 3000000,
    potential_imps_count: 71000000,
    potential_imps_forecast: 20000000000,
    start_date: new Date(),
    riv: 2.5,
  };

  public accounts = [
    { name: "Account 1" },
    { name: "Account 2" },
    { name: "Account 3" },
  ];

  public transformedFianceData = [
    ["Group1",[3378,11446,6395,21219],["Subgroup1",2010,4990,4012,11012],["Subgroup3",1368,6456,2383,10207]],
    ["Group3",[12878,8043,9570,30491],["Subgroup1",3392,3037,5495,11924],["Subgroup3",9486,5006,4075,18567]]
  ];

  openModal(modalName) {
    console.log("open modal");
  }
}
