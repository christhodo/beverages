import { ActionReducerMap } from '@ngrx/store';
import * as fromBeverages from './beverages/beverages.reducer';

export interface AppState {
  [fromBeverages.BEVERAGE_FEATURE_KEY]: fromBeverages.BeverageState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromBeverages.BEVERAGE_FEATURE_KEY]: fromBeverages.beverageReducer,
};
