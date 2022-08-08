import { Beverage } from '@beverages/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as BeverageActions from './beverages.actions';

export const BEVERAGE_FEATURE_KEY = 'beverages';

export interface BeverageState extends EntityState<Beverage> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface BeveragePartialState {
  readonly [BEVERAGE_FEATURE_KEY]: BeverageState;
}

export const beverageAdapter: EntityAdapter<Beverage> =
  createEntityAdapter<Beverage>();

export const initialBeverageState: BeverageState =
  beverageAdapter.getInitialState({
    loaded: false,
  });

const onFailed = (state, { error }): BeverageState => ({ ...state, error });

const onDispatch = (state, action): BeverageState => ({
  ...state,
  loaded: false,
  error: null,
});

const _beverageReducer = createReducer(
  initialBeverageState,
  on(
    BeverageActions.loadBeverageFailed,
    BeverageActions.loadBeveragesFailed,
    BeverageActions.createBeverageFailed,
    BeverageActions.updateBeverageFailed,
    BeverageActions.deleteBeverageFailed,
    onFailed
  ),
  on(
    BeverageActions.loadBeverage,
    BeverageActions.loadBeverages,
    BeverageActions.createBeverage,
    BeverageActions.updateBeverage,
    BeverageActions.deleteBeverage,
    onDispatch
  ),
  on(BeverageActions.loadBeverageSuccess, (state, { beverage }) =>
    beverageAdapter.upsertOne(beverage, { ...state, loaded: true })
  ),
  on(BeverageActions.selectBeverage, (state, { beverageId }) => ({
    ...state,
    selectedId: beverageId,
  })),
  on(BeverageActions.loadBeveragesSuccess, (state, { beverages }) =>
    beverageAdapter.setAll(beverages, { ...state, loaded: true })
  ),
  on(BeverageActions.deleteBeverageSuccess, (state, { beverage }) =>
    beverageAdapter.removeOne(beverage.id, { ...state, loaded: true })
  ),
  on(BeverageActions.updateBeverageSuccess, (state, { beverage }) =>
    beverageAdapter.updateOne(
      { id: beverage.id, changes: beverage },
      { ...state, loaded: true }
    )
  ),
  on(BeverageActions.createBeverageSuccess, (state, { beverage }) =>
    beverageAdapter.addOne(beverage, { ...state, loaded: true })
  )
);

export function beverageReducer(
  state: BeverageState | undefined,
  action: Action
) {
  return _beverageReducer(state, action);
}
