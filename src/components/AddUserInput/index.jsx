import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {AddUserModal} from '..';
import './style.scss';

const defaultProps = {
    addUser: () => null,
    pending: false,
};

const propTypes = {
    addUser: PropTypes.func,
    pending: PropTypes.bool,
};

const AddUserInput =
    ({
         addUser,
         pending,
     }) => {
        const [isModalActive, setIsModalActive] = useState(false);

        const openModal = (event) => {
            if (event) event.preventDefault();
            setIsModalActive(true);
        };

        const closeModal = (event) => {
            if (event) event.preventDefault();
            setIsModalActive(false);
        };

        return (
            <div className="add-user-input">
                <button className="btn btn-light add-user-input__button" onClick={openModal}>Добавить</button>
                {isModalActive &&
                (<AddUserModal
                    pending={pending}
                    closeModal={closeModal}
                    addUser={addUser}/>)}
            </div>
        );
    };


AddUserInput.defaultProps = defaultProps;
AddUserInput.propTypes = propTypes;
export default AddUserInput;
