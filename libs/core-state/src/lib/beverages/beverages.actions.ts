import { createAction, props } from '@ngrx/store';
import { Beverage } from '@beverages/api-interfaces';

// Select Entity

export const selectBeverage = createAction(
  '[BEVERAGE] Select Beverage',
  props<{ beverageId: string }>()
);

// Load all Entities

export const loadBeverages = createAction('[BEVERAGE] Load Beverages');

export const loadBeveragesSuccess = createAction(
  '[BEVERAGE] Load Beverages Success',
  props<{ beverages: Beverage[] }>()
);

export const loadBeveragesFailed = createAction(
  '[BEVERAGE] Load Beverages Failed',
  props<{ error: unknown }>()
);

// Load Single Entity

export const loadBeverage = createAction(
  '[BEVERAGE] Load Beverage',
  props<{ beverageId: string }>()
);

export const loadBeverageSuccess = createAction(
  '[BEVERAGE] Load Beverage Success',
  props<{ beverage: Beverage }>()
);

export const loadBeverageFailed = createAction(
  '[BEVERAGE] Load Beverage Failed',
  props<{ error: unknown }>()
);

// Load Create Entity

export const createBeverage = createAction(
  '[BEVERAGE] Create Beverage',
  props<{ beverage: Beverage }>()
);

export const createBeverageSuccess = createAction(
  '[BEVERAGE] Create Beverage Success',
  props<{ beverage: Beverage }>()
);

export const createBeverageFailed = createAction(
  '[BEVERAGE] Create Beverage Failed',
  props<{ error: unknown }>()
);

// Load Update Entity

export const updateBeverage = createAction(
  '[BEVERAGE] Update Beverage',
  props<{ beverage: Beverage }>()
);

export const updateBeverageSuccess = createAction(
  '[BEVERAGE] Update Beverage Success',
  props<{ beverage: Beverage }>()
);

export const updateBeverageFailed = createAction(
  '[BEVERAGE] Create Beverage Failed',
  props<{ error: unknown }>()
);

// Load Delete Entity

export const deleteBeverage = createAction(
  '[BEVERAGE] Delete Beverage',
  props<{ beverage: Beverage }>()
);

export const deleteBeverageSuccess = createAction(
  '[BEVERAGE] Delete Beverage Success',
  props<{ beverage: Beverage }>()
);

export const deleteBeverageFailed = createAction(
  '[BEVERAGE] Create Beverage Failed',
  props<{ error: unknown }>()
);
