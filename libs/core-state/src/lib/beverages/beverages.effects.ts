import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Beverage } from '@beverages/api-interfaces';
import { BeveragesService } from '@beverages/core-data';
import * as BeverageActions from './beverages.actions';
import { map } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';

@Injectable()
export class BeverageEffects {
  loadBeverage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeverageActions.loadBeverage),
      fetch({
        run: (action) =>
          this.beveragesService
            .find(action.beverageId)
            .pipe(
              map((beverage: Beverage) =>
                BeverageActions.loadBeverageSuccess({ beverage })
              )
            ),
        onError: (_action, error) =>
          BeverageActions.loadBeverageFailed({ error }),
      })
    )
  );
  loadBeverages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeverageActions.loadBeverages),
      fetch({
        run: () =>
          this.beveragesService
            .all()
            .pipe(
              map((beverages: Beverage[]) =>
                BeverageActions.loadBeveragesSuccess({ beverages })
              )
            ),
        onError: (_action, error) =>
          BeverageActions.loadBeveragesFailed({ error }),
      })
    )
  );
  createBeverage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeverageActions.createBeverage),
      pessimisticUpdate({
        run: (action) =>
          this.beveragesService
            .create(action.beverage)
            .pipe(
              map((beverage: Beverage) =>
                BeverageActions.createBeverageSuccess({ beverage })
              )
            ),
        onError: (_action, error) =>
          BeverageActions.createBeverageFailed({ error }),
      })
    )
  );

  updateBeverage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeverageActions.updateBeverage),
      pessimisticUpdate({
        run: (action) =>
          this.beveragesService
            .update(action.beverage)
            .pipe(
              map((beverage: Beverage) =>
                BeverageActions.updateBeverageSuccess({ beverage })
              )
            ),
        onError: (_action, error) =>
          BeverageActions.updateBeverageFailed({ error }),
      })
    )
  );

  deleteBeverage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeverageActions.deleteBeverage),
      pessimisticUpdate({
        run: (action) =>
          this.beveragesService.delete(action.beverage).pipe(
            map(() =>
              BeverageActions.deleteBeverageSuccess({
                beverage: action.beverage,
              })
            )
          ),
        onError: (_action, error) =>
          BeverageActions.deleteBeverageFailed({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private beveragesService: BeveragesService
  ) {}
}
