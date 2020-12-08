const getPagesInfo = ({application: {pageSize, totalPages, currentPage}}) => ({
    pageSize,
    totalPages,
    currentPage
});

const getUserData = ({application: {data}}) => ({data});

const getSortInfo = ({application: {sortBy, sortDirection}}) => ({sortBy, sortDirection});

export {
    getPagesInfo,
    getUserData,
    getSortInfo,
};
