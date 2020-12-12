import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const defaultProps = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    selectUser: () => null,
    isSelect: false,
};

const propTypes = {
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    selectUser: PropTypes.func,
    isSelect: PropTypes.bool,
};

const TableBodyRow =
    ({
         id,
         firstName,
         lastName,
         email,
         phone,
         isSelect,
         userId,
         selectUser,
     }) => {
        const handler = (event) => {
            event.preventDefault();
            selectUser(userId);
        };

        return (
            <tr className={`table-body-row${isSelect ? ' table-body-row_active' : ''}`} onClick={handler}>
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
