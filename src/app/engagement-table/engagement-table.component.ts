import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  moduleId: module.id,
  selector: 'engagement-table',
  templateUrl: 'engagement-table.component.html',
  styleUrls: ['engagement-table.component.css'],
  providers: [AccountService]
})
export class EngagementTableComponent implements OnInit {
  public transformedFianceData = [
    ["Group1",[3378,11446,6395,21219],["Subgroup1",2010,4990,4012,11012],["Subgroup3",1368,6456,2383,10207]],
    ["Group3",[12878,8043,9570,30491],["Subgroup1",3392,3037,5495,11924],["Subgroup3",9486,5006,4075,18567]]
  ];
  public accounts: Object[];

  constructor(private _accountService: AccountService) {}

  ngOnInit() {
    this._accountService.all().then(accounts => this.accounts = accounts);
  }

  toggleChildRows = (group) => {
    if (!group.areChildRowsShown) {
      group.areChildRowsShown = true;
    } else {
      group.areChildRowsShown = !group.areChildRowsShown;
    }
  }
}
