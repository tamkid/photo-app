import React from 'react';
import PropTypes from 'prop-types';
import './PhotoCard.scss';
import { Button } from 'reactstrap';

PhotoCard.propTypes = {
    photo: PropTypes.object,
    onRemoveItem: PropTypes.func,
    onEditItem: PropTypes.func,
};

PhotoCard.defaultProps = {
    photo: null,
    onRemoveItem: null,
    onEditItem: null
};

function PhotoCard(props) {
    const {photo, onRemoveItem, onEditItem} = props;

    const handleClickRemove = (photo) => {
        if(onRemoveItem){
            onRemoveItem(photo);
        }
    }

    const handleClickEdit = (photo) => {
        if(onEditItem){
            onEditItem(photo);
        }
    }

    return (
        <div className="photo">
            <img src={photo.photo} alt={photo.title} />

            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>

                <div className="photo__actions">
                    <div>
                        <Button 
                            outline size="sm" color="light"
                            onClick={() => handleClickEdit(photo)}
                        >
                            Edit
                        </Button>
                    </div>
                    <div>
                        <Button 
                            outline size="sm" color="danger"
                            onClick={() => handleClickRemove(photo)}
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;