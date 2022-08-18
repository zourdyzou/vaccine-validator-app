import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, Middleware, CombinedState, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { reducers, RootState } from '@/redux/reducers/reducer';

export const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const reducer = (
  state: CombinedState<RootState> | undefined,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return reducers(state, action);
};

export const store = configureStore({
  reducer,
  middleware: [thunkMiddleware, logger],
  devTools: true,
});

const initializeStoreWithToolkit = () =>
  createStore(reducer, bindMiddleware([thunkMiddleware, logger]));

export const wrapper = createWrapper(initializeStoreWithToolkit);

export type AppDispatch = typeof store.dispatch;
