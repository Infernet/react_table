import React from 'react';
import './style.scss';
import {FilterInput} from '..';

const defaultProps = {};

const propTypes = {};

const Header =
    () => {

        return (
            <header className="header container">
                <h1 className="header__title">Users Table</h1>
                <FilterInput/>
            </header>
        );
    };


Header.defaultProps = defaultProps;
Header.propTypes = propTypes;
export default Header;
