import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import './AddEdit.scss';
import {v4} from 'uuid';

function AddEditPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {photoId} = useParams();
    const editPhoto = useSelector(state => state.photo.find(o => o.id === photoId));
    const isAddMode = !editPhoto;

    const initialValues = isAddMode 
    ? {
        title: '',
        categoryId: null,
        photo: ''
    }
    : editPhoto;

    const handleSubmit = (value) => {
        new Promise(resolve => {
            setTimeout(() => {
                if(isAddMode){
                    const newPhoto = {
                        ...value,
                        id: v4()
                    }
                    const action = addPhoto(newPhoto);
                    dispatch(action);
                } else {
                    const action = updatePhoto(value);
                    dispatch(action);
                }

                history.push('/photos');
                resolve(true);
            }, 2000);
        });
        
    }
    
    return (
        <div className='photo-add-edit'>
            <Banner title='New Photo' backgroundUrl={Images.BG_003} />

            <div className='photo-add-edit__form'>
                <PhotoForm
                    initialValues={initialValues}
                    isAddMode={isAddMode}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default AddEditPage;