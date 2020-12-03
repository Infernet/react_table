import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const baseMiddleware = [sagaMiddleware];
const devMiddleware = [logger];

const preloadedState={};
const middleware = [...baseMiddleware, ...(process.env.NODE_ENV === 'production' ? [] : devMiddleware)];
const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store=createStore(rootReducer,preloadedState,composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export default store;
