import {
    GET_USERS,
    SORT_USERS,
    CHANGE_PAGE,
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

export {
    applicationGetUsers,
    applicationChangeCurrentPage,
    applicationSortUsers
};
