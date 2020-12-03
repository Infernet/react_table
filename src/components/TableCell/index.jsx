import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import './style.scss';

const defaultProps = {
    bemClassName: block('table-cell'),
};

const propTypes = {
    bemClassName: PropTypes.func,
};

const TableCell =
    ({
         bemClassName,
     }) => {

        return (
            <td className={bemClassName()}>

            </td>
        );
    };


TableCell.defaultProps = defaultProps;
TableCell.propTypes = propTypes;
export default TableCell;
