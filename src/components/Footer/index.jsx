import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import './style.scss';

const defaultProps = {
    bemClassName: block('footer'),
};

const propTypes = {
    bemClassName: PropTypes.func,
};

const Footer =
    ({
         bemClassName,
     }) => {

        return (
            <footer className={bemClassName()}>

            </footer>
        );
    };


Footer.defaultProps = defaultProps;
Footer.propTypes = propTypes;
export default Footer;
