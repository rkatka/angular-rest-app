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
    this.widgetsService.all().subscribe(
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
    this.widgetsService.delete(widget).subscribe(result=> {
      this.loadWidgets();
      this.reset();
    });
  }

  saveWidget(widget) {
    if( !widget.id ) {
      this.createWidget(widget)
    } else {
      this.updateWidget(widget)
    }
  }

  createWidget(widget) {
    this.widgetsService.create(widget)
    .subscribe(result=> {
      this.loadWidgets();
      this.reset()
    });
  }

  updateWidget(widget) {
    this.widgetsService.update(widget)
    .subscribe(result=> {
      this.loadWidgets();
      this.reset()
    })
  }

  cancel(widget) {
    this.reset()
  }

}
