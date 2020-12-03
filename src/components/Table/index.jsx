import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import './style.scss';

const defaultProps = {
    bemClassName: block('table'),
};

const propTypes = {
    bemClassName: PropTypes.func,
};

const Table =
    ({
         bemClassName,
     }) => {

        return (
            <table className={bemClassName()}>

            </table>
        );
    };


Table.defaultProps = defaultProps;
Table.propTypes = propTypes;
export default Table;
