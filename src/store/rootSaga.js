import {all} from 'redux-saga/effects';
import applicationSaga from './application/saga';

const rootSaga = function* () {
    yield all([
        applicationSaga(),
    ]);
};


export default rootSaga;
