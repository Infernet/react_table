import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ModalWrapper, CustomInput} from '..';
import './style.scss';
import {isEmail, isPhone} from '../../helpers';


const defaultProps = {
    closeModal: () => null,
    addUser: () => null,
};

const propTypes = {
    closeModal: PropTypes.func,
    addUser: PropTypes.func,
};

const AddUserModal =
    ({
         closeModal,
         addUser,
     }) => {
        const [user, setUser] = useState({
            id: null,
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
        });

        const handleField = (fieldName = null, value) => {
            if (fieldName === null) return;
            setUser(prev => {
                return {
                    ...prev,
                    [fieldName]: value,
                };
            });
        };


        const handleForm = (event) => {
            event.preventDefault();
            let error = {};
            for (let name of Object.keys(user)) {
                let valid = user[name] !== null;
                if (valid)
                    switch (name) {
                        case 'id':
                            valid = user[name].length > 0 && !isNaN(Number(user[name]));
                            break;
                        case 'firstName':
                        case 'lastName':
                            valid = user[name].length > 0;
                            break;
                        case  'email':
                            valid = isEmail(user[name]);
                            break;
                        case  'phone':
                            valid = isPhone(user[name]);
                            break;
                        default:
                            return;
                    }
                if (!valid)
                    error = {...error, [name]: null};
            }
            if (Object.keys(error).length > 0)
                setUser(prev => {
                    return {
                        ...prev,
                        ...error
                    };
                });
            else
                addUser({...user, id: Number(user.id)},closeModal);
        };

        return (
            <ModalWrapper closeModal={closeModal}>
                <form onSubmit={handleForm} className="add-user-modal">
                    <h1 className="add-user-modal__title">Новый товар</h1>
                    <div className="add-user-modal__form">
                        <CustomInput
                            title="ID"
                            name="id"
                            type="number"
                            handler={handleField}
                            valid={user.id !== null}
                        />
                        <CustomInput
                            title="First Name"
                            name="firstName"
                            type="text"
                            handler={handleField}
                            valid={user.firstName !== null}
                        />
                        <CustomInput
                            title="Last Name"
                            name="lastName"
                            type="text"
                            handler={handleField}
                            valid={user.lastName !== null}
                        />
                        <CustomInput
                            title="Email"
                            name="email"
                            type="email"
                            handler={handleField}
                            valid={user.email !== null}
                        />
                        <CustomInput
                            title="Phone"
                            name="phone"
                            type="phone"
                            handler={handleField}
                            valid={user.phone !== null}
                        />
                    </div>
                    <button type="submit" className="button button_primary add-user-modal__submit">Добавить</button>
                </form>
            </ModalWrapper>
        );
    };

AddUserModal.defaultProps = defaultProps;
AddUserModal.propTypes = propTypes;
export default AddUserModal;
