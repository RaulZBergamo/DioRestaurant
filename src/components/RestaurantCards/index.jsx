import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, RestaurantPic ,Title, Address } from './styles';

import restaurante from '../../assets/restaurante-fake.png'

const RestaurantCard = ({ restaurant, onClick }) => (
    <Restaurant onClick={onClick}>
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor={"#e7711c"} />
            <Address>{restaurant.vicinity || restaurant.formatted_adress}</Address>
        </RestaurantInfo>
        <RestaurantPic 
            src={
                restaurant.photo ? restaurant.photo[0].getUrl() : restaurante
            } 
            alt="Foto do restaurante"></RestaurantPic>
    </Restaurant>
);


export default RestaurantCard; 