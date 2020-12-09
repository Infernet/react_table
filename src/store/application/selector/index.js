const getPagesInfo = ({application: {pageSize, totalPages, currentPage}}) => ({
    pageSize,
    totalPages,
    currentPage
});

const getUserData = ({application: {data, filteredData}}) => ({data, filteredData});

const getSortInfo = ({application: {sortBy, sortDirection, searchString}}) => ({sortBy, sortDirection, searchString});

export {
    getPagesInfo,
    getUserData,
    getSortInfo,
};
