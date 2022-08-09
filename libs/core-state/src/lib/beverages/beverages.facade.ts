import { Injectable } from '@angular/core';
import { Beverage } from '@beverages/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';
import * as BeverageActions from './beverages.actions';
import * as BeverageSelectors from './beverages.selectors';
import * as fromBeverages from './beverages.reducer';

@Injectable({
  providedIn: 'root',
})
export class BeverageFacade {
  allBeverages$ = this.store.pipe(
    map((state) => BeverageSelectors.getAllBeverages(state))
  );
  selectedBeverages$ = this.store.pipe(
    select(BeverageSelectors.getSelectedBeverage)
  );
  loaded$ = this.store.pipe(select(BeverageSelectors.getBeveragesLoaded));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === BeverageActions.createBeverage({} as any).type ||
        action.type === BeverageActions.updateBeverage({} as any).type ||
        action.type === BeverageActions.deleteBeverage({} as any).type
    )
  );

  selectBeverage(beverageId: string) {
    this.dispatch(BeverageActions.selectBeverage({ beverageId }));
  }

  loadBeverages() {
    this.dispatch(BeverageActions.loadBeverages());
  }

  loadBeverage(beverageId: string) {
    this.dispatch(BeverageActions.loadBeverage({ beverageId }));
  }

  saveBeverage(beverage: Beverage) {
    beverage.id ? this.updateBeverage(beverage) : this.createBeverage(beverage);
  }

  createBeverage(beverage: Beverage) {
    this.dispatch(BeverageActions.createBeverage({ beverage }));
  }

  updateBeverage(beverage: Beverage) {
    this.dispatch(BeverageActions.updateBeverage({ beverage }));
  }

  deleteBeverage(beverage: Beverage) {
    this.dispatch(BeverageActions.deleteBeverage({ beverage }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  constructor(
    private store: Store<fromBeverages.BeveragePartialState>,
    private actions$: ActionsSubject
  ) {}
}
