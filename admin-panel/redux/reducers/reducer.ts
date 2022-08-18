import { combineReducers } from 'redux';
import { adminSummaryReducer } from '@/redux/reducers/admin-reducer';

export const reducers = combineReducers({
  adminSummary: adminSummaryReducer,
});

export type RootState = ReturnType<typeof reducers>;
