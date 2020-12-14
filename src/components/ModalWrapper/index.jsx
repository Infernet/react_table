import React from 'react';
import PropTypes from 'prop-types';
import {Loader} from '..';
import './style.scss';

const defaultProps = {
    closeModal: () => null,
    withoutClosing: false,
    children: <></>,
    pending: false,
};

const propTypes = {
    closeModal: PropTypes.func,
    withoutClosing: PropTypes.bool,
    pending: PropTypes.bool,
    children: PropTypes.element,
};


const ModalWrapper =
    ({
         closeModal,
         withoutClosing,
         pending,
         children
     }) => {
        const close = (event) => {
            event.preventDefault();
            if (!withoutClosing) closeModal();
        };

        return (
            <div className='modal-wrapper'>
                <button type='button' className='modal-wrapper__popup' onClick={close}/>
                <div className="modal-wrapper__wrapper">
                    {(!withoutClosing) && (
                        <button
                            type="button"
                            className="modal-wrapper__close"
                            onClick={close}>
                            <span className="modal-wrapper__close__cross">&#10006;</span>
                        </button>
                    )}
                    <div className="modal-wrapper__body">
                        {children}
                        {pending && <Loader active={pending}/>}
                    </div>
                </div>
            </div>);
    };


ModalWrapper.defaultProps = defaultProps;
ModalWrapper.propTypes = propTypes;
export default ModalWrapper;
