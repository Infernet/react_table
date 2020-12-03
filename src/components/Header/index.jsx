import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import './style.scss';

const defaultProps = {
    bemClassName: block('header'),
};

const propTypes = {
    bemClassName: PropTypes.func,
};

const Header =
    ({
         bemClassName,
     }) => {

        return (
            <header className={bemClassName()}>

            </header>
        );
    };


Header.defaultProps = defaultProps;
Header.propTypes = propTypes;
export default Header;
