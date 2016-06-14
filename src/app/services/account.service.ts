import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  all() {
    return Promise.resolve([
      { name: "Account 1" },
      { name: "Account 2" },
      { name: "Account 3" },
    ]);
  }

}
