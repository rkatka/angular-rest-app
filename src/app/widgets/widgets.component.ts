import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../shared/widgets.service';
import { Widget } from '../shared/widget.model';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  selectedWidget: Widget = null;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets;
    this.reset();
  }

  reset() {
    this.selectedWidget = {
      id: null,
      name: '',
      description: ''
    }
  }

  cancel() {
    this.reset();
  }

  save(widget) {
    console.log('saving widget', widget);
    this.reset();
  }
  selected(widget) {
    this.selectedWidget = widget;
  }
}
