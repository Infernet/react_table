import {
    GET_USERS,
    SORT_USERS,
    CHANGE_PAGE,
    FILTER_DATA,
    ADD_USER, CHANGE_SELECTED_USER,
} from '../types';


const applicationGetUsers = (url = null, cb = null) => ({type: GET_USERS.name, payload: {url, callback: cb}});

const applicationChangeCurrentPage = (page = 0) => ({type: CHANGE_PAGE.name, payload: page});

const applicationSortUsers = (fieldKey = null, sortDirection) => ({
    type: SORT_USERS.name,
    payload: {
        key: fieldKey,
        direction: sortDirection
    }
});

const applicationFilterData = (searchString = null) => ({type: FILTER_DATA.name, payload: searchString});

const applicationAddUser = (user, callback = null) => ({type: ADD_USER.name, payload: {user, callback}});

const applicationSelectUser = (key = null) => ({type: CHANGE_SELECTED_USER.name, payload: key});

export {
    applicationGetUsers,
    applicationChangeCurrentPage,
    applicationSortUsers,
    applicationFilterData,
    applicationAddUser,
    applicationSelectUser,
};
