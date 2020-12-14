import React, {useEffect} from 'react';
import {
    applicationAddUser,
    applicationChangeCurrentPage,
    applicationFilterData,
    applicationGetUsers, applicationSelectUser,
    applicationSortUsers
} from '../../store/rootActions';
import {connect} from 'react-redux';
import {UserTableForm} from '../../components';
import './style.scss';

const defaultProps = {};

const propTypes = {};


const UsersPage =
    ({
         getData,
         data,
         totalPages,
         currentPage,
         goToPage,
         sortBy,
         sortDirection,
         sortUsers,
         pending,
         filterData,
         searchString,
         addUser,
         selectedUserKey,
         selectedUserData,
         selectUser,
     }) => (
        <UserTableForm
            getUsers={getData}
            selectedUserKey={selectedUserKey}
            selectedUserData={selectedUserData}
            selectUser={selectUser}
            addUser={addUser}
            searchString={searchString}
            filterData={filterData}
            pending={pending}
            sortBy={sortBy}
            sortDirection={sortDirection}
            sortUsers={sortUsers}
            data={data}
            totalPages={totalPages}
            currentPage={currentPage}
            goToPage={goToPage}/>
    );


UsersPage.defaultProps = defaultProps;
UsersPage.propTypes = propTypes;

const mapStateToProps =
    ({
         application: {
             currentPageData,
             totalPages,
             currentPage,
             sortBy,
             sortDirection,
             pending,
             searchString,
             selectedUserKey,
             selectedUserData,
         }
     }) => ({
        data: currentPageData,
        totalPages,
        currentPage,
        sortBy,
        sortDirection,
        pending,
        searchString,
        selectedUserKey,
        selectedUserData,
    });

const mapDispatchToProps = {
    getData: applicationGetUsers,
    goToPage: applicationChangeCurrentPage,
    sortUsers: applicationSortUsers,
    filterData: applicationFilterData,
    addUser: applicationAddUser,
    selectUser: applicationSelectUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
