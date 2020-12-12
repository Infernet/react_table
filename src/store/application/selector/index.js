const getPagesInfo = ({application: {pageSize, totalPages, currentPage}}) => ({
    pageSize,
    totalPages,
    currentPage
});

const getUserData = ({application: {data, filteredData}}) => ({data, filteredData});

const getSortInfo = ({application: {sortBy, sortDirection, searchString}}) => ({sortBy, sortDirection, searchString});

const getSelectedUser = ({application: {selectedUserKey, selectedUserData}}) => ({selectedUserKey, selectedUserData});

export {
    getPagesInfo,
    getUserData,
    getSortInfo,
    getSelectedUser,
};
