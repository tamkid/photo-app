import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import PhotoRandom from 'components/PhotoRandom';
import { ErrorMessage } from 'formik';

PhotoRandomField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
};

PhotoRandomField.defaultProps = {
    label: '',
};

function PhotoRandomField(props) {
    const {field, form, label} = props;
    const {name, value, onBlur} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    const handleImageUrlChange = (imageUrl) => {
        form.setFieldValue(name, imageUrl);
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <PhotoRandom 
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}

                showError={showError}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default PhotoRandomField;