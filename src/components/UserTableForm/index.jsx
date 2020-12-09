import React from 'react';
import PropTypes from 'prop-types';
import {
    Footer,
    Header,
    Table,
} from '..';
import './style.scss';

const defaultProps = {
    data: [],
    currentPage:0,
    totalPages:0,
};

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})),
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
};

const UserTableForm =
    ({
         data,
         currentPage,
         totalPages,
         goToPage,
         sortBy,
         sortDirection,
         sortUsers,
         pending,
         filterData,
         searchString,
         addUser,
     }) => {

        return (
            <div className="user-table-form container-fluid">
                <Header filterData={filterData} searchString={searchString} addUser={addUser}/>
                <main className="user-table-form__main container">
                    <Table
                        pending={pending}
                        sortUsers={sortUsers}
                        data={data}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        goToPage={goToPage}/>
                </main>
                <Footer/>
            </div>
        );
    };


UserTableForm.defaultProps = defaultProps;
UserTableForm.propTypes = propTypes;
export default UserTableForm;
