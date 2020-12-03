import {takeLatest, put} from 'redux-saga/effects';
import {GET_USERS} from '../types';


const getUsers = function* ({type, payload}) {
    yield put({type: GET_USERS.SUCCESS, payload: {}});
};


const applicationSaga = function* () {
    yield takeLatest(GET_USERS.name, getUsers);
};


export default applicationSaga;
