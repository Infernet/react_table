import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const defaultProps = {
    active: false,
};

const propTypes = {
    active: PropTypes.bool
};

const Loader = ({active}) => (
    <div className="loader" style={{display: active ? 'block' : 'none'}}>
        {active && <span className="loader__spinner"/>}
    </div>
);

Loader.defaultProps = defaultProps;
Loader.propTypes = propTypes;
export default Loader;
