import React from 'react';
import {TableHeader, TableBody, TableFooter, Loader} from '..';
import './style.scss';
import PropTypes from 'prop-types';

const defaultProps = {
    data: [],
    currentPage: 0,
    totalPages: 0,
    pending: false,
};

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})),
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    pending: PropTypes.bool,
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
         pending,
     }) => {
        return (
            <div className="data-table">
                <div className="data-table__wrapper">
                    <table className="data-table__table table table-dark table-hover">
                        <TableHeader sortUsers={sortUsers} sortDirection={sortDirection} sortBy={sortBy}/>
                        <TableBody users={data}/>
                    </table>
                </div>
                <TableFooter
                    currentPage={currentPage}
                    totalPages={totalPages} goToPage={goToPage}/>
                <Loader active={pending}/>
            </div>
        );
    };


Table.defaultProps = defaultProps;
Table.propTypes = propTypes;
export default Table;
