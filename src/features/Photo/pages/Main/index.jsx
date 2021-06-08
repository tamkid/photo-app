import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import { removePhoto } from 'features/Photo/photoSlice';

function MainPage() {
    const photos = useSelector(state => state.photo);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRemove = (photo) => {
        const action = removePhoto(photo.id);
        dispatch(action);
    }

    const handleEdit = (photo) => {
        const editUrl = `/photos/${photo.id}`;
        history.push(editUrl);
    }

    return (
        <div className='photo-main'>
            <Banner title='Kid Photo App' backgroundUrl={Images.BG_002} />
            
            <Container>
                 <Link to='/photos/add'>New Photo</Link>
                 <PhotoList 
                    photos={photos}
                    onRemove={handleRemove}
                    onEdit={handleEdit} />
            </Container>
        </div>
    );
}

export default MainPage;