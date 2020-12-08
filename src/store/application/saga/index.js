import {takeLatest, put, select} from 'redux-saga/effects';
import {v4 as uuid} from 'uuid';
import {CHANGE_PAGE, GET_USERS, SORT_USERS} from '../types';
import {getPagesInfo, getUserData} from '../selector';
import {sortUsersByField} from '../../../helpers';


const getUsers = function* () {
    try {
        yield put({type: GET_USERS.REQUEST});
        const {pageSize} = yield select(getPagesInfo);
        const request = yield fetch(process.env.REACT_APP_DATA_URL);
        const users = yield request.json();
        const data = users.map((data) => ({key: uuid(), data}));
        const totalPages = Math.floor(data.length / pageSize) + 1;

        yield put({
            type: GET_USERS.SUCCESS, payload: {
                data,
                currentPage: 1,
                totalPages,
                currentPageData: data.slice(0, pageSize)
            }
        });
    } catch (error) {
        yield put({type: GET_USERS.FAILURE});
    }
};

const changePage = function* ({payload: page}) {
    const {pageSize, totalPages, currentPage} = yield select(getPagesInfo);
    yield put({type: CHANGE_PAGE.REQUEST});
    if (currentPage === page || page < 1 || page > totalPages) {
        yield put({type: CHANGE_PAGE.FAILURE});
    } else {
        try {
            const {data} = yield select(getUserData);
            yield put({
                type: CHANGE_PAGE.SUCCESS,
                payload: {
                    currentPage: page,
                    currentPageData: data.slice(pageSize * (page - 1), pageSize * page)
                }
            });
        } catch (error) {
            yield put({type: CHANGE_PAGE.FAILURE});
        }
    }
};

const sortUsers = function* ({payload: {key, direction}}) {
    try {
        const {data} = yield select(getUserData);
        const {pageSize} = yield select(getPagesInfo);
        const newUserData = sortUsersByField(data, key, direction);

        yield put({
            type: SORT_USERS.SUCCESS,
            payload: {
                data: newUserData,
                sortBy:key,
                sortDirection:direction,
                currentPage: 1,
                currentPageData: newUserData.slice(0, pageSize)
            }
        });
    } catch (error) {
        console.error(error);
        yield put({type: SORT_USERS.FAILURE});
    }
};


const applicationSaga = function* () {
    yield takeLatest(GET_USERS.name, getUsers);
    yield takeLatest(CHANGE_PAGE.name, changePage);
    yield takeLatest(SORT_USERS.name, sortUsers);
};


export default applicationSaga;
