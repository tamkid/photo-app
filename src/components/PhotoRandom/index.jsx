import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './PhotoRandom.scss';

PhotoRandom.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,

    showError: PropTypes.bool,
};

PhotoRandom.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null,

    showError: false
};

const RandomImage = () => {    
    const randomId = Math.floor(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/250/250`;
}

function PhotoRandom(props) {
    const {name, imageUrl, onImageUrlChange, onRandomButtonBlur, showError} = props;

    const handleClickButton = () => {
        if(onImageUrlChange){
            const randomImg = RandomImage();
            onImageUrlChange(randomImg);
        }
    };

    return (
        <div className={showError ? 'photo-random is-invalid' : 'photo-random'}>
            <div className='photo-random__button'>
                <Button 
                    outline
                    color='primary'
                    name={name}

                    onBlur={onRandomButtonBlur}
                    onClick={handleClickButton}
                >
                    Random Photo
                </Button>
            </div>
            <div className="photo-random__img">
                {
                    imageUrl && 
                    <img 
                        src={imageUrl} 
                        alt="Please random again"
                        onError={handleClickButton} />
                }
            </div>
        </div>
    );
}

export default PhotoRandom;