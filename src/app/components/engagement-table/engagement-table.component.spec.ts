import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EngagementTableComponent } from './engagement-table.component';

// describe('Component: EngagementTable', () => {
  // let builder: TestComponentBuilder;

  // beforeEachProviders(() => [EngagementTableComponent]);
  // beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    // builder = tcb;
  // }));

  // it('should inject the component', inject([EngagementTableComponent],
      // (component: EngagementTableComponent) => {
    // expect(component).toBeTruthy();
  // }));

  // it('should create the component', inject([], () => {
    // return builder.createAsync(EngagementTableComponentTestController)
      // .then((fixture: ComponentFixture<any>) => {
        // let query = fixture.debugElement.query(By.directive(EngagementTableComponent));
        // expect(query).toBeTruthy();
        // expect(query.componentInstance).toBeTruthy();
      // });
  // }));
// });

// @Component({
  // selector: 'test',
  // template: `
    // <engagement-table></engagement-table>
  // `,
  // directives: [EngagementTableComponent]
// })
// class EngagementTableComponentTestController {
// }

