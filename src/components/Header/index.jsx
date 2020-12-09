import React from 'react';
import PropTypes from 'prop-types';
import {AddUserInput, FilterInput} from '..';
import './style.scss';

const defaultProps = {
    filterData: () => null,
    searchString: null,
    addUser: () => null,
};

const propTypes = {
    filterData: PropTypes.func,
    searchString: PropTypes.string,
    addUser: PropTypes.func,
};

const Header =
    ({
         filterData,
         searchString,
         addUser,
     }) => {

        return (
            <header className="header container">
                <h1 className="header__title">Users Table</h1>
                <div className="header__wrapper">
                    <AddUserInput addUser={addUser}/>
                    <FilterInput filterData={filterData} searchString={searchString}/>
                </div>
            </header>
        );
    };


Header.defaultProps = defaultProps;
Header.propTypes = propTypes;
export default Header;
