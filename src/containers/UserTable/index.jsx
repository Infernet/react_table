import React, {useEffect} from 'react';
import {applicationChangeCurrentPage, applicationGetUsers, applicationSortUsers} from '../../store/rootActions';
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
     }) => {

        useEffect(() => {
            getData();
        }, [getData]);

        return (
            <UserTableForm
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
         }
     }) => ({
        data: currentPageData,
        totalPages,
        currentPage,
        sortBy,
        sortDirection,
    });

const mapDispatchToProps = {
    getData: applicationGetUsers,
    goToPage: applicationChangeCurrentPage,
    sortUsers:applicationSortUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
