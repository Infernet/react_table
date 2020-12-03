import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import './style.scss';

const defaultProps = {
    bemClassName: block('table-row'),
};

const propTypes = {
    bemClassName: PropTypes.func,
};

const TableRow =
    ({
         bemClassName,
     }) => {

        return (
            <tr className={bemClassName()}>

            </tr>
        );
    };


TableRow.defaultProps = defaultProps;
TableRow.propTypes = propTypes;
export default TableRow;
