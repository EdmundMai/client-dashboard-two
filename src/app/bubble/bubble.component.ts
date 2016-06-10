import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bubble',
  templateUrl: 'bubble.component.html',
  styleUrls: ['bubble.component.css']
})
export class BubbleComponent implements OnInit {
  @Input() actual: number;
  @Input() forecast: number;
  @Input() metricLongName: string;
  @Input() metricShortName: string;

  constructor() {}

  ngOnInit() {
  }

  openModal(modalName) {
    console.log("open modal");
  }

}
