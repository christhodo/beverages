import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Beverage } from '@beverages/api-interfaces';

@Component({
  selector: 'beverages-beverage-details',
  templateUrl: './beverage-detail.component.html',
  styleUrls: ['./beverage-detail.component.scss'],
})
export class BeverageDetailComponent {
  currentBeverage: Beverage;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set beverage(value) {
    if (value) this.originalTitle = value.name;
    this.currentBeverage = { ...value };
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }
}
