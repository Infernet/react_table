import {ADD_USER, CHANGE_PAGE, FILTER_DATA, GET_USERS, CHANGE_SELECTED_USER, SORT_USERS} from '../types';

const INITIAL_STATE = {
    data: [],
    filteredData: [],
    currentPageData: [],
    sortBy: null,
    sortDirection: null,
    searchString: null,
    currentPage: 1,
    totalPages: 0,
    pageSize: 5,
    pending: false,
    selectedUserKey: null,
    selectedUserData: null,
};

const applicationReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case SORT_USERS.REQUEST:
        case GET_USERS.REQUEST:
        case CHANGE_PAGE.REQUEST:
        case FILTER_DATA.REQUEST:
        case ADD_USER.REQUEST:
        case CHANGE_SELECTED_USER.REQUEST:
            return {...state, pending: true};
        case SORT_USERS.SUCCESS:
        case GET_USERS.SUCCESS:
        case CHANGE_PAGE.SUCCESS:
        case FILTER_DATA.SUCCESS:
        case ADD_USER.SUCCESS:
        case CHANGE_SELECTED_USER.SUCCESS:
            return {...state, pending: false, ...payload};
        case GET_USERS.FAILURE:
        case SORT_USERS.FAILURE:
        case CHANGE_PAGE.FAILURE:
        case FILTER_DATA.FAILURE:
        case ADD_USER.FAILURE:
        case CHANGE_SELECTED_USER.FAILURE:
            return {...state, pending: false, ...payload};
        default:
            return state;
    }
};


export default applicationReducer;
