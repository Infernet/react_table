import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import './style.scss';

const defaultProps = {
    bemClassName: block('table-header-cell'),
};

const propTypes = {
    bemClassName: PropTypes.func,
};

const TableHeaderCell =
    ({
         bemClassName,
     }) => {

        return (
            <th className={bemClassName()}>

            </th>
        );
    };


TableHeaderCell.defaultProps = defaultProps;
TableHeaderCell.propTypes = propTypes;
export default TableHeaderCell;
