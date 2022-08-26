import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from '@beverages/api-interfaces';

@Component({
  selector: 'beverages-beverages-list',
  templateUrl: './beverages-list.component.html',
  styleUrls: ['./beverages-list.component.scss'],
})
export class BeveragesListComponent {
  @Input() beverages: Beverage[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
