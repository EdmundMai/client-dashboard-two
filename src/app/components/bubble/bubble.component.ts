import { Component, OnInit, Input } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter'
import { ShortenedNumber } from '../../pipes/shortened-number.pipe';

@Component({
  moduleId: module.id,
  selector: 'bubble',
  templateUrl: 'bubble.component.html',
  styleUrls: ['bubble.component.css'],
  pipes: [ShortenedNumber],
  providers: [BrowserDomAdapter]
})
export class BubbleComponent implements OnInit {
  @Input() actual: number;
  @Input() forecast: number;
  @Input() metricLongName: string;
  @Input() metricShortName: string;

  constructor(private _dom: BrowserDomAdapter) {}

  ngOnInit() {
  }

  openModal(modalName) {
    let dialog = this._dom.query("ct-dialog." + this.metricShortName.toLowerCase() + "Modal");
    dialog.showModal();
  }

}
