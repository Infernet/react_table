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
    <div className="loader" style={{display: active ? 'flex' : 'none'}}>
        {active && (
            <svg className="loader__spinner" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                 preserveAspectRatio="xMidYMid">
                <rect className="loader__spinner__rect" x="0" y="0" width="100" height="100" fill="none"/>
                <circle className="loader__spinner__circle" cx="50" cy="50" r="40" stroke="#999999" fill="none" strokeWidth="6"
                        strokeLinecap="round">
                </circle>
            </svg>
        )}
    </div>
);

Loader.defaultProps = defaultProps;
Loader.propTypes = propTypes;
export default Loader;
