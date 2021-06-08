import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Card, CardFooter, CardImg, CardTitle, Col, Container, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
    photos: PropTypes.array,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
};

PhotoList.defaultProps = {
    photos: [],
    onRemove: null,
    onEdit: null,
};

function PhotoList(props) {
    const {photos, onRemove, onEdit} = props;
    return (
        <Row>
            {photos.map(photo => (
                <Col key={photo.title} xs="12" md="6" lg="3">
                <PhotoCard
                    photo={photo}
                    onRemoveItem={onRemove}
                    onEditItem={onEdit}
                />
                </Col>
            ))}
        </Row>
    );
}

export default PhotoList;