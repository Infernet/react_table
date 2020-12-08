import {createAsyncType} from '../../../helpers';

const GET_USERS = createAsyncType('application/GET_USERS');
const SORT_USERS = createAsyncType('application/SORT_USERS');
const CHANGE_PAGE = createAsyncType('application/CHANGE_PAGE');


export {
    GET_USERS,
    SORT_USERS,
    CHANGE_PAGE,
};
