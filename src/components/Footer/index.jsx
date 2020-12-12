import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const defaultProps = {
    userData: null,
    selectedKey: null,
};

const propTypes = {
    userData: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        address: PropTypes.shape({
            city: PropTypes.string,
            state: PropTypes.string,
            streetAddress: PropTypes.string,
            zip: PropTypes.string
        })
    }),
    selectedKey: PropTypes.string,
};

const Footer =
    ({
         userData,
         selectedKey
     }) => {

        const getUserData = () => {
            if (selectedKey !== null) {
                const {firstName, lastName, description, address} = userData;
                return (
                    <div className="footer__user-info">
                        <div className="footer__user-info__wrapper">
                            <p className="footer__user-info__title">Выбран пользователь <b
                                className="footer__text_bold">{firstName + ' ' + lastName}</b></p>
                        </div>
                        {description && (
                            <div className="footer__user-info__wrapper">
                                <p className="footer__user-info__title">Описание: </p>
                                <p className="footer__user-info__description">{description}</p>
                            </div>
                        )}
                        {address && (
                            <div className="footer__user-info__wrapper">
                                <p className="footer__user-info__title">Адрес проживания: <b
                                    className="footer__text_bold">{address.streetAddress}</b>
                                </p>
                                <p className="footer__user-info__title">Город: <b
                                    className="footer__text_bold">{address.city}</b>
                                </p>
                                <p className="footer__user-info__title">Провинция/штат: <b
                                    className="footer__text_bold">{address.state}</b>
                                </p>
                                <p className="footer__user-info__title">Индекс: <b
                                    className="footer__text_bold">{address.zip}</b>
                                </p>
                            </div>
                        )}
                    </div>
                );
            }
        };

        return (
            <footer className="footer container">
                <div className="footer__wrapper">
                    {getUserData()}
                </div>
            </footer>
        );
    };


Footer.defaultProps = defaultProps;
Footer.propTypes = propTypes;
export default Footer;
