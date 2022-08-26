import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Beverage, emptyBeverage } from '@beverages/api-interfaces';
import { BeverageFacade } from '@beverages/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'beverages-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss'],
})
export class BeveragesComponent implements OnInit {
  allBeverages$: Observable<Beverage[]> = this.beverageFacade.allBeverages$;
  selectedBeverage$: Observable<Beverage> =
    this.beverageFacade.selectedBeverages$;

  form: FormGroup;

  constructor(
    private beverageFacade: BeverageFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.beverageFacade.mutations$.subscribe((_) => this.resetBeverage());
  }

  ngOnInit() {
    this.initForm();
    this.beverageFacade.loadBeverages();
    this.resetBeverage();

    const beverageRouteId = this.route.snapshot.params['id'];

    if (beverageRouteId) {
      this.loadBeverage(beverageRouteId);
    }
  }

  viewBeverage(beverageId: string) {
    this.router.navigate(['beverages', beverageId]);
  }

  loadBeverage(beverageId: string) {
    this.beverageFacade.selectBeverage(beverageId);
    this.beverageFacade.loadBeverage(beverageId);
  }

  selectBeverage(beverage: Beverage) {
    this.beverageFacade.selectBeverage(beverage.id);
    this.form.patchValue(beverage);
  }

  saveBeverage(beverage: Beverage) {
    this.beverageFacade.saveBeverage(beverage);
  }

  deleteBeverage(beverage: Beverage) {
    this.beverageFacade.deleteBeverage(beverage);
  }

  resetBeverage() {
    this.form.reset();
    this.selectBeverage(emptyBeverage);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      title: [''],
      size: [''],
      espresso: [''],
      shots: [''],
      syrup: [''],
      pumps: [''],
      iced: [''],
    });
  }
}
