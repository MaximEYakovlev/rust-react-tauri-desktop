import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './slices/doctorsSlice';
import patientsReducer from './slices/patientsSlice';
import proceduresReducer from './slices/proceduresSlice';

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    patients: patientsReducer,
    procedures: proceduresReducer,
  }
});

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {doctors: doctorsState, patients: patientsState,  procedures: proceduresState}
export type AppDispatch = AppStore['dispatch'];
