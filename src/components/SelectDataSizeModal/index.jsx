import React from 'react';
import PropTypes from 'prop-types';
import {ModalWrapper} from '..';
import {API_BIG_DATA_URL, API_SMALL_DATA_URL} from '../../constants';
import './style.scss';

const defaultProps = {
    getUsers: () => null,
    pending: false,
};

const propTypes = {
    getUsers: PropTypes.func,
    pending: PropTypes.bool,
};

const SelectDataSizeModal =
    ({
         getUsers,
         closeModal,
         pending,
     }) => {

        const handler = ({target: {name}}) => {
            if (name === 'big') {
                getUsers(API_BIG_DATA_URL, closeModal);
            } else {
                getUsers(API_SMALL_DATA_URL, closeModal);
            }
        };

        return (
            <ModalWrapper withoutClosing pending={pending}>
                <div className="select-data-size-modal">
                    <h3 className="select-data-size-modal__title">Выберите размер загружаемых записей</h3>
                    <div className="select-data-size-modal__form">
                        <button
                            type="button"
                            onClick={handler}
                            className="select-data-size-modal__button btn btn-dark"
                            name="small">
                            Маленький набор данных
                        </button>
                        <button
                            type="button"
                            onClick={handler}
                            className="select-data-size-modal__button btn btn-dark"
                            name="big">
                            Большой набор данных
                        </button>
                    </div>
                </div>
            </ModalWrapper>
        );
    };


SelectDataSizeModal.defaultProps = defaultProps;
SelectDataSizeModal.propTypes = propTypes;
export default SelectDataSizeModal;
