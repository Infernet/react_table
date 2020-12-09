import {
    GET_USERS,
    SORT_USERS,
    CHANGE_PAGE,
    FILTER_DATA,
    ADD_USER,
} from '../types';


const applicationGetUsers = () => ({type: GET_USERS.name});

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

export {
    applicationGetUsers,
    applicationChangeCurrentPage,
    applicationSortUsers,
    applicationFilterData,
    applicationAddUser,
};
