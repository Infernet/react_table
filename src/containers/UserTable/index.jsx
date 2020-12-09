import React, {useEffect} from 'react';
import {
    applicationAddUser,
    applicationChangeCurrentPage,
    applicationFilterData,
    applicationGetUsers,
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
         addUser
     }) => {

        useEffect(() => {
            getData();
        }, [getData]);

        return (
            <UserTableForm
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
                goToPage={goToPage}/>);
    };


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
         }
     }) => ({
        data: currentPageData,
        totalPages,
        currentPage,
        sortBy,
        sortDirection,
        pending,
        searchString,
    });

const mapDispatchToProps = {
    getData: applicationGetUsers,
    goToPage: applicationChangeCurrentPage,
    sortUsers: applicationSortUsers,
    filterData: applicationFilterData,
    addUser:applicationAddUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
