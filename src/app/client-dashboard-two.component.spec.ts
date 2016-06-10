import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ClientDashboardTwoAppComponent } from '../app/client-dashboard-two.component';

beforeEachProviders(() => [ClientDashboardTwoAppComponent]);

describe('App: ClientDashboardTwo', () => {
  it('should create the app',
      inject([ClientDashboardTwoAppComponent], (app: ClientDashboardTwoAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
