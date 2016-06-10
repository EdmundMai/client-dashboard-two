import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ugc-banner',
  templateUrl: 'ugc-banner.component.html',
  styleUrls: ['ugc-banner.component.css']
})
export class UgcBannerComponent implements OnInit {
  public brand = { name: "Amope" };
  public ugc = [{
    photo_link: "http://www.beautyandfashiontech.com/wp-content/uploads/2014/11/amope.jpg",
    full_name: "Katrina K.",
    state: "NY",
  }];

  constructor() {}

  ngOnInit() {
  }

}
