import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`;

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #fff;
    font-size: 12px;
    margin: 2px 4px;
`;

const ImageCard = ( {photo, title} ) => <Card photo={photo}><Title>{title}</Title></Card>

export default ImageCard;