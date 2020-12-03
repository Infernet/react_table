const INITIAL_STATE = {
    data:[],
    currentPage:0,
    totalPages:0,
    pageSize:50,
};

const applicationReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {

        default:
            return state;
    }
};


export default applicationReducer;
