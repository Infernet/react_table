import {CHANGE_PAGE, GET_USERS, SORT_USERS} from '../types';

const INITIAL_STATE = {
    data: [],
    currentPageData: [],
    sortBy: null,
    sortDirection: null,
    searchString:null,
    currentPage: 1,
    totalPages: 0,
    pageSize: 5,
    pending: false,
};

const applicationReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case SORT_USERS.REQUEST:
        case GET_USERS.REQUEST:
        case CHANGE_PAGE.REQUEST:
            return {...state, pending: true};
        case SORT_USERS.SUCCESS:
        case GET_USERS.SUCCESS:
        case CHANGE_PAGE.SUCCESS:
            return {...state, pending: false, ...payload};
        case GET_USERS.FAILURE:
        case SORT_USERS.FAILURE:
        case CHANGE_PAGE.FAILURE:
            return {...state, pending: false, ...payload};
        default:
            return state;
    }
};


export default applicationReducer;
