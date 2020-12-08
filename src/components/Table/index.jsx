import React from 'react';
import {TableHeader, TableBody, TableFooter} from '..';
import './style.scss';
import PropTypes from 'prop-types';

const defaultProps = {
    data: [],
    currentPage: 0,
    totalPages: 0,
};

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})),
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
};

const Table =
    ({
         data,
         currentPage,
         totalPages,
         goToPage,
         sortBy,
         sortDirection,
         sortUsers,
     }) => {
        return (
            <div className="data-table">
                <div className="data-table__wrapper">
                    <table className="data-table__table table table-dark">
                        <TableHeader sortUsers={sortUsers} sortDirection={sortDirection} sortBy={sortBy}/>
                        <TableBody users={data}/>
                    </table>
                </div>
                <TableFooter
                    currentPage={currentPage}
                    totalPages={totalPages} goToPage={goToPage}/>
            </div>
        );
    };


Table.defaultProps = defaultProps;
Table.propTypes = propTypes;
export default Table;
