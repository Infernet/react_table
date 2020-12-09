import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const defaultProps = {
    closeModal: () => null,
    children: <></>,
};

const propTypes = {
    closeModal: PropTypes.func,
    children: PropTypes.element,
};


const ModalWrapper =
    ({
         closeModal,
         children
     }) => (
        <div className='modal-wrapper'>
            <button type='button' className='modal-wrapper__popup' onClick={closeModal}/>
            <div className="modal-wrapper__wrapper">
                <button
                    type="button"
                    className="modal-wrapper__close"
                    onClick={closeModal}>
                    <span className="modal-wrapper__close__cross">&#10006;</span>
                </button>
                <div className="modal-wrapper__body">
                    {children}
                </div>
            </div>
        </div>
    );


ModalWrapper.defaultProps = defaultProps;
ModalWrapper.propTypes = propTypes;
export default ModalWrapper;
