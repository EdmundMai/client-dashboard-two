import { Component, OnInit, Input } from '@angular/core';
import { ShortenedNumber } from '../shortened-number.pipe';

@Component({
  moduleId: module.id,
  selector: 'bubble',
  templateUrl: 'bubble.component.html',
  styleUrls: ['bubble.component.css'],
  pipes: [ShortenedNumber]
})
export class BubbleComponent implements OnInit {
  @Input() actual: number;
  @Input() forecast: number;
  @Input() metricLongName: string;
  @Input() metricShortName: string;

  ngOnInit() {
  }

  openModal(modalName) {
    console.log("open modal");
  }

}
