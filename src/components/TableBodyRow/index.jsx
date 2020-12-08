import React from 'react';
import './style.scss';

const defaultProps = {};

const propTypes = {};

const TableBodyRow =
    ({
         id,
         firstName,
         lastName,
         email,
         phone,
     }) => {

        return (
            <tr className="table-body-row">
                <td className="table-body-row__cell">
                    <p>{id}</p>
                </td>
                <td className="table-body-row__cell">
                    <p>{firstName}</p>
                </td>
                <td className="table-body-row__cell">
                    <p>{lastName}</p>
                </td>
                <td className="table-body-row__cell">
                    <p>{email}</p>
                </td>
                <td className="table-body-row__cell">
                    <p>{phone}</p>
                </td>
            </tr>
        );
    };


TableBodyRow.defaultProps = defaultProps;
TableBodyRow.propTypes = propTypes;
export default TableBodyRow;
