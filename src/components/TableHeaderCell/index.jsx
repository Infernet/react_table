import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {SORT_DIRECTION} from '../../constants';

const {ASC, DESC} = SORT_DIRECTION;

const defaultProps = {
    sortBy: null,
    fieldName: null,
    sortDirection: ASC,
    sortData: () => null,
};

const propTypes = {
    title: PropTypes.string.isRequired,
    fieldName: PropTypes.string,
    sortBy: PropTypes.string,
    sortDirection: PropTypes.string,
    sortData: PropTypes.func,
};

const TableHeaderCell =
    ({
         title,
         fieldName,
         sortBy,
         sortDirection,
         sortData,
     }) => {
        const sortAction = () => {
            if (sortBy === fieldName) {
                sortData(fieldName, sortDirection === ASC ? DESC : ASC);
            } else sortData(fieldName, ASC);
        };

        return (
            <th className="table-header-cell">
                <div className="table-header-cell__wrapper" onClick={sortAction}>
                    <p className="table-header-cell__title">{title}</p>
                    {(sortBy === fieldName) &&
                    <span className={`table-header-cell__direction 
                    ${sortDirection === ASC ?
                        'table-header-cell__direction_asc' :
                        'table-header-cell__direction_desc'}`}>&#9650;</span>
                    }
                </div>
            </th>
        );
    };


TableHeaderCell.defaultProps = defaultProps;
TableHeaderCell.propTypes = propTypes;
export default TableHeaderCell;
