import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';
import './SelectField.scss';

SelectField.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    disabled: false,
    placeholder: '',
    options: []
};

function SelectField(props) {
    const {
        field, form,
        label, disabled, placeholder, options
    } = props;
    const {name, value} = field;
    const selectedOption = options.find(option => option.value === value);
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    
    const handleChange = (selectOption) => {
        const selectedValue = selectOption ? selectOption.value : selectOption;
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    };

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select 
                {...field}
                onChange={handleChange}
                value={selectedOption}

                id={name}
                placeholder={placeholder}
                disabled={disabled}
                options={options}

                className={showError ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelectField;