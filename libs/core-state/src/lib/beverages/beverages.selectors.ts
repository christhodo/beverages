import { emptyBeverage } from '@beverages/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  beverageAdapter,
  BeverageState,
  BEVERAGE_FEATURE_KEY,
} from './beverages.reducer';

export const getBeverageState =
  createFeatureSelector<BeverageState>(BEVERAGE_FEATURE_KEY);

const { selectAll, selectEntities } = beverageAdapter.getSelectors();

export const getBeveragesLoaded = createSelector(
  getBeverageState,
  (state: BeverageState) => state.loaded
);

export const getBeverageError = createSelector(
  getBeverageState,
  (state: BeverageState) => state.error
);

export const getAllBeverages = createSelector(
  getBeverageState,
  (state: BeverageState) => selectAll(state)
);

export const getBeverageEntities = createSelector(
  getBeverageState,
  (state: BeverageState) => selectEntities(state)
);

export const getSelectedBeverageId = createSelector(
  getBeverageState,
  (state: BeverageState) => state.selectedId
);

export const getSelectedBeverage = createSelector(
  getBeverageEntities,
  getSelectedBeverageId,
  (entities, selectedId) =>
    (selectedId && entities[selectedId]) || emptyBeverage
);
