import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() currentStatus;
  @Output() logout = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
