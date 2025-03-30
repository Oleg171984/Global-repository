// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import { createReduxHistoryContext } from 'redux-first-history';
// import { createBrowserHistory } from 'history';
// import rootReducer from './index';
// import rootSaga from './root.saga';

// const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
//   history: createBrowserHistory(),
// });

// const sagaMiddleware = createSagaMiddleware();

// export const store = configureStore({
//   reducer: {
//     router: routerReducer,
//     ...rootReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware),
// });

// sagaMiddleware.run(rootSaga);
// export const history = createReduxHistory(store);

import { appReducer } from './app';
import { hotelsReducer } from './hotels';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './root.saga.js';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    app: appReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);
