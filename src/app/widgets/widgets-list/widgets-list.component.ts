import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '../../shared/widget.model';


@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent {
  @Input() widgets: Widget[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
