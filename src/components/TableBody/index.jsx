import React from 'react';
import {TableBodyRow} from '..';
import './style.scss';

const defaultProps = {};

const propTypes = {};

const TableBody = ({users}) => {

    return (
        <tbody className="table-body">
        {users.map(({key, data}) => (<TableBodyRow key={key} {...data}/>))}
        </tbody>
    );
};


TableBody.defaultProps = defaultProps;
TableBody.propTypes = propTypes;
export default TableBody;
