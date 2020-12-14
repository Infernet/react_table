import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Footer,
    Header, SelectDataSizeModal,
    Table,
} from '..';
import './style.scss';

const defaultProps = {
    getUsers: () => null,
    data: [],
    currentPage: 0,
    totalPages: 0,
    goToPage: () => null,
    sortBy: null,
    sortUsers: () => null,
    sortDirection: null,
    pending: false,
    filterData: () => null,
    searchString: null,
    addUser: () => null,
    selectUser: () => null,
    selectedUserData: null,
    selectedUserKey: null,
};

const propTypes = {
    getUsers: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    goToPage: PropTypes.func,
    sortBy: PropTypes.string,
    sortUsers: PropTypes.func,
    sortDirection: PropTypes.string,
    pending: PropTypes.bool,
    filterData: PropTypes.func,
    searchString: PropTypes.string,
    addUser: PropTypes.func,
    selectUser: PropTypes.func,
    selectedUserData: PropTypes.shape({}),
    selectedUserKey: PropTypes.string,
};

const UserTableForm =
    ({
         getUsers,
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
         selectUser,
         selectedUserData,
         selectedUserKey,
     }) => {
        const [isModalActive, setIsModalActive] = useState(true);

        const handlerChangeDataSize = (url = null) => {
            if (url !== null) {
                getUsers(url, closeModal);
            }
        };

        const closeModal = () => {
            setIsModalActive(false);
        };

        return (
            <div className="user-table-form container-fluid">
                <Header
                    filterData={filterData}
                    searchString={searchString}
                    pending={pending}
                    addUser={addUser}/>
                <main className="user-table-form__main container">
                    <Table
                        selectedUserKey={selectedUserKey}
                        selectedUserData={selectedUserData}
                        selectUser={selectUser}
                        pending={pending}
                        sortUsers={sortUsers}
                        data={data}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        goToPage={goToPage}/>
                </main>
                <Footer userData={selectedUserData} selectedKey={selectedUserKey}/>
                {isModalActive &&
                (<SelectDataSizeModal
                        getUsers={handlerChangeDataSize}
                        pending={pending}/>
                )}
            </div>
        );
    };


UserTableForm.defaultProps = defaultProps;
UserTableForm.propTypes = propTypes;
export default UserTableForm;
