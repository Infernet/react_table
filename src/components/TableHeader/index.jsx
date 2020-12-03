import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import './style.scss';

const defaultProps = {
    bemClassName: block('table-header'),
};

const propTypes = {
    bemClassName: PropTypes.func,
};

const TableHeader =
    ({
         bemClassName,
     }) => {

        return (
            <thead className={bemClassName()}>

            </thead>
        );
    };


TableHeader.defaultProps = defaultProps;
TableHeader.propTypes = propTypes;
export default TableHeader;
