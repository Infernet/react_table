import {takeLatest, put, select} from 'redux-saga/effects';
import {v4 as uuid} from 'uuid';
import {ADD_USER, CHANGE_PAGE, FILTER_DATA, GET_USERS, CHANGE_SELECTED_USER, SORT_USERS} from '../types';
import {getPagesInfo, getSelectedUser, getSortInfo, getUserData} from '../selector';
import {sortUsersByField, filterUsersBySearchString} from '../../../helpers';


const getUsers = function* () {
    try {
        yield put({type: GET_USERS.REQUEST});
        const {pageSize} = yield select(getPagesInfo);
        const request = yield fetch(process.env.REACT_APP_DATA_URL);
        const users = yield request.json();
        const data = users.map((data) => ({key: uuid(), data}));
        const totalPages = Math.ceil(data.length / pageSize);
        yield put({
            type: GET_USERS.SUCCESS, payload: {
                data,
                filteredData: data,
                currentPage: 1,
                totalPages,
                currentPageData: data.slice(0, pageSize),
                selectedUserKey: null,
                selectedUserData: null
            }
        });
    } catch (error) {
        yield put({type: GET_USERS.FAILURE});
    }
};

const changePage = function* ({payload: page}) {
    try {
        const {pageSize, totalPages, currentPage} = yield select(getPagesInfo);
        yield put({type: CHANGE_PAGE.REQUEST});
        if (currentPage === page || page < 1 || page > totalPages) {
            yield put({type: CHANGE_PAGE.FAILURE});
        } else {
            const {filteredData} = yield select(getUserData);
            yield put({
                type: CHANGE_PAGE.SUCCESS,
                payload: {
                    currentPage: page,
                    currentPageData: filteredData.slice(pageSize * (page - 1), pageSize * (page)),
                }
            });
        }
    } catch (error) {
        yield put({type: CHANGE_PAGE.FAILURE});
    }
};

const sortUsers = function* ({payload: {key, direction}}) {
    try {
        const {filteredData} = yield select(getUserData);
        const {pageSize} = yield select(getPagesInfo);
        const newUserData = sortUsersByField(filteredData, key, direction);

        yield put({
            type: SORT_USERS.SUCCESS,
            payload: {
                filteredData: newUserData,
                sortBy: key,
                sortDirection: direction,
                currentPage: 1,
                currentPageData: newUserData.slice(0, pageSize)
            }
        });
    } catch (error) {
        yield put({type: SORT_USERS.FAILURE});
    }
};

const filterUsers = function* ({payload: search}, insideCall = false) {
    try {
        yield put({type: FILTER_DATA.REQUEST});
        const {data} = yield select(getUserData);
        const {sortBy, sortDirection, searchString} = yield select(getSortInfo);
        const {pageSize} = yield select(getPagesInfo);
        if (search === searchString && !insideCall)
            yield put({type: FILTER_DATA.FAILURE});
        else if (search) {
            const filteredData = sortUsersByField(filterUsersBySearchString(data, search), sortBy, sortDirection);
            yield put({
                type: FILTER_DATA.SUCCESS,
                payload: {
                    filteredData,
                    currentPage: 1,
                    totalPages: Math.ceil(filteredData.length / pageSize),
                    currentPageData: filteredData.slice(0, pageSize),
                    searchString: search
                }
            });
        } else {
            yield put({
                type: FILTER_DATA.SUCCESS, payload: {
                    filteredData: sortUsersByField(data, sortBy, sortDirection),
                    currentPage: 1,
                    totalPages: Math.ceil(data.length / pageSize),
                    currentPageData: data.slice(0, pageSize),
                    searchString: null,
                }
            });
        }
    } catch (error) {
        yield put({type: FILTER_DATA.FAILURE});
    }
};

const addUser = function* ({payload: {user, callback}}) {
    try {
        yield put({type: ADD_USER.REQUEST});
        const {data} = yield select(getUserData);
        const {pageSize} = yield select(getPagesInfo);
        const {searchString} = yield select(getSortInfo);
        let valid = true;
        for (let k of Object.keys(user)) {
            if (user[k] === null) {
                valid = false;
                break;
            }
        }
        if (!valid)
            yield put({type: ADD_USER.FAILURE});
        else {
            const newData = [{
                key: uuid(),
                data: user
            }, ...data];

            yield put({
                type: ADD_USER.SUCCESS, payload: {
                    data: newData,
                    filteredData: newData,
                    currentPage: 1,
                    totalPages: Math.ceil(newData.length / pageSize),
                    currentPageData: data.slice(0, pageSize)
                }
            });

            yield filterUsers({payload: searchString}, true);
            if (callback) callback();
        }
    } catch (error) {
        yield put({type: ADD_USER.FAILURE});
    }
};

const selectUser = function* ({payload: key}) {
    try {
        yield put({type: CHANGE_SELECTED_USER.REQUEST});
        if (key !== null) {
            const {selectedUserKey} = yield select(getSelectedUser);
            if (selectedUserKey && selectedUserKey === key) {
                yield put({
                    type: CHANGE_SELECTED_USER.SUCCESS,
                    payload: {
                        selectedUserKey: null,
                        selectedUserData: null
                    }
                });
                return;
            }
            const {data} = yield select(getUserData);
            const {data: userData} = data.find((({key: k}) => (k === key)));
            if (userData) {
                yield put({
                    type: CHANGE_SELECTED_USER.SUCCESS,
                    payload: {
                        selectedUserData: userData,
                        selectedUserKey: key
                    }
                });
                return;
            }
        }
        yield put({type: CHANGE_SELECTED_USER.FAILURE});
    } catch (error) {
        yield put({type: CHANGE_SELECTED_USER.FAILURE});
    }
};

const applicationSaga = function* () {
    yield takeLatest(GET_USERS.name, getUsers);
    yield takeLatest(CHANGE_PAGE.name, changePage);
    yield takeLatest(SORT_USERS.name, sortUsers);
    yield takeLatest(FILTER_DATA.name, filterUsers);
    yield takeLatest(ADD_USER.name, addUser);
    yield takeLatest(CHANGE_SELECTED_USER.name, selectUser);
};


export default applicationSaga;
