import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import './style.scss';


const defaultProps = {
    title: '',
    name: null,
    handler: () => null,
    type: 'text',
    valid: true,
};

const propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    handler: PropTypes.func,
    type: PropTypes.string,
    valid: PropTypes.bool,
};

const CustomInput =
    ({
         title,
         name,
         handler,
         type,
         valid,
     }) => {
        const [isValid, setIsValid] = useState(true);

        useEffect(() => {
            setIsValid(valid);
        }, [valid]);

        const handleChange = ({target: {value}}) => {
            handler(name, value);
        };


        const getInput = () => {
            switch (type) {
                case 'number':
                    return (<NumberFormat
                        type="tel"
                        onChange={handleChange}
                        decimalScale={0}
                        className={`form-control custom-input__input${!isValid ? ' custom-input__input_error' : ''}`}
                    />);
                case 'email':
                    return (<input
                        type='email'
                        onChange={handleChange}
                        className={`form-control custom-input__input${!isValid ? ' custom-input__input_error' : ''}`}
                    />);
                case 'textarea':
                    return (<textarea
                        name={name}
                        className={`form-control custom-input__input${isValid ? ' custom-input__input_error' : ''}`}
                        onChange={handleChange}
                    />);
                case 'phone':
                    return <NumberFormat
                        type="tel"
                        onChange={handleChange}
                        format="(###)###-####"
                        className={`form-control custom-input__input${!isValid ? ' custom-input__input_error' : ''}`}
                    />;
                case 'text':
                default:
                    return (<input
                        type='text'
                        onChange={handleChange}
                        className={`form-control custom-input__input${!isValid ? ' custom-input__input_error' : ''}`}
                    />);
            }
        };

        return (
            <div className="custom-input">
                <label className="custom-input__label">
                    <p className={`custom-input__title${!isValid ? ' custom-input__title_error' : ''}`}>{title}</p>
                    {getInput()}
                </label>
            </div>);
    };

CustomInput.defaultProps = defaultProps;
CustomInput.propTypes = propTypes;
export default CustomInput;
