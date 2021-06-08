import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import PhotoRandomField from 'custom-fields/PhotoRandomField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
    initialValues: PropTypes.object,
    isAddMode: PropTypes.bool,
};

PhotoForm.defaultProps = {
    onSubmit: null,
    initialValues: null,
    isAddMode: true,
};


function PhotoForm(props) {

    const {initialValues, isAddMode} = props;

    const validateSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),
        categoryId: Yup.number().required('This field is required.').nullable(),
        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is require'),
            otherwise: Yup.string().notRequired()
        })
    });

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const {values, errors, touched, isSubmitting} = formikProps;
                // console.log('formik', {values, errors, touched});
                return (
                    <Form>
                        <FastField
                            name='title'
                            component={InputField}

                            type="text"
                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        >                    
                        </FastField>

                        <FastField
                            name='categoryId'
                            component={SelectField}

                            label="Category"
                            placeholder="what is your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        >                    
                        </FastField>

                        <FastField
                            name='photo'
                            component={PhotoRandomField}

                            label='Photo'
                        />

                        <FormGroup>
                            <Button 
                                type='submit' 
                                color={isAddMode ? 'primary' : 'success'}
                            >
                                {isSubmitting && <Spinner size="sm" animation="border" />}
                                {isAddMode ? 'Add to album' : 'Update your photo'}
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
            
        </Formik>
    );
}

export default PhotoForm;