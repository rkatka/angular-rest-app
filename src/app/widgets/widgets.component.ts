import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../shared/widgets.service';
import { Widget } from '../shared/widget.model';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[];
  selectedWidget: Widget = null;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.loadWidgets();
    this.reset();
  }

  loadWidgets() {
    this.widgetsService.loadWidgets().subscribe(
      widgets => this.widgets = widgets
    );
  }

  reset() {
    this.selectedWidget = {
      id: null,
      name: '',
      description: ''
    }
  }

  selectWidget(widget){ 
    this.selectedWidget = widget;
  }

  deleteWidget(widget) {
    console.log('deleting widget', widget);
  }

  saveWidget(widget) {
    console.log('saving widget', widget);
    this.reset();
  }

  cancel(widget) {
    this.reset()
  }

}
