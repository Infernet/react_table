import {createAsyncType} from '../../../helpers';

const GET_USERS = createAsyncType('application/GET_USERS');
const SORT_USERS = createAsyncType('application/SORT_USERS');
const CHANGE_PAGE = createAsyncType('application/CHANGE_PAGE');
const FILTER_DATA = createAsyncType('application/FILTER_DATA');
const ADD_USER = createAsyncType('application/ADD_USER');


export {
    GET_USERS,
    SORT_USERS,
    CHANGE_PAGE,
    FILTER_DATA,
    ADD_USER,
};
