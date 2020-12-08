import React from 'react';
import {TableHeaderCell} from '..';
import './style.scss';
import {TABLE_FIELDS} from '../../constants';

const defaultProps = {};

const propTypes = {};

const TableHeader =
    ({
         sortBy,
         sortDirection,
         sortUsers,
     }) => {

        return (
            <thead className='table-header'>
            <tr>
                {TABLE_FIELDS.map((
                    {
                        key,
                        title
                    }) =>
                    (<TableHeaderCell
                        key={key}
                        fieldName={key}
                        title={title}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                        sortData={sortUsers}/>))}
            </tr>
            </thead>
        );
    };


TableHeader.defaultProps = defaultProps;
TableHeader.propTypes = propTypes;
export default TableHeader;
