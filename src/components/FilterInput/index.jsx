import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const defaultProps = {
    filterData: () => null,
    searchString: null
};

const propTypes = {
    filterData: PropTypes.func,
    searchString: PropTypes.string,
};

const FilterInput =
    ({
         filterData,
         searchString,
     }) => {
        const [value, setValue] = useState('');

        useEffect(() => {
            if (value !== searchString)
                setValue(searchString !== null ? searchString : '');
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [searchString]);

        const formHandler = (event) => {
            event.preventDefault();
            console.log('SEND');
            if (value)
                filterData(value);
            else
                filterData(null);
        };

        const handleInput = ({target: {value}}) => {
            setValue(value);
        };

        return (
            <div className="filter-input">
                <form onSubmit={formHandler} action="#" className="filter-input__form">
                    <input type="text" className="form-control filter-input__input" value={value} onChange={handleInput}/>
                    <button type="submit" className="btn btn-light filter-input__submit">Поиск</button>
                </form>
            </div>
        );
    };


FilterInput.defaultProps = defaultProps;
FilterInput.propTypes = propTypes;
export default FilterInput;
