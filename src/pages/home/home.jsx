import React, { useState } from 'react'

import logoo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png'

import { Container, Search, Logo, Wrapper, CarrouselTitle, Carousel, ModalTitle, ModalDescription, ModalOpenNow} from './styles';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Card, RestaurantCard, Modal, Mapa } from '../../components'
import { useSelector } from 'react-redux';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants)

    const isOpenNow = restaurantSelected?.opening_hours.open_now;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        autoplay: true
    };

    function handleKeyPress(e) {
        if(e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId) {
        setPlaceId(placeId)
        setModalOpened(true);
    }

    function openModal(placeId) {
        setPlaceId(placeId)
        setModalOpened(true)

        console.log(isOpenNow)
        console.log(restaurantSelected?.opening_hours)

        if(isOpenNow) {
            console.log("Ta aberto")
        } else if (isOpenNow == false) {
            console.log("Ta fechado")
        }
    }

    return(
        <Wrapper>
            <Container>
                <Search>
                    <Logo
                        src={logoo}
                    />
                    <TextField
                    label='Pesquisar restaurantes'
                    outlined
                    //onTrailingIconSelect={() => this.setState({value: ''})}
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                        <Input
                        onKeyPress={handleKeyPress}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} 
                        />
                    </TextField>
                    <CarrouselTitle>
                        Na sua área
                    </CarrouselTitle>
                    <Carousel {...settings}>
                        {restaurants.map((restaurant) => (
                            <Card 
                                key={restaurant.place_id}
                                photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                                title={restaurant.name}
                            />
                        ))}
                    </Carousel>
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard 
                        restaurant={restaurant}
                        onClick={() => openModal(restaurant.place_id)}
                    />
                ))}
            </Container>
            <Mapa query={query} placeId={placeId} />
            <Modal
                open={modalOpened}
                onClose={() => setModalOpened(!modalOpened)}
            >
                <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                <ModalDescription>{restaurantSelected?.formatted_phone_number}</ModalDescription>
                <ModalDescription>{restaurantSelected?.formatted_address}</ModalDescription>
                <ModalOpenNow>{isOpenNow? 'Aberto agora' : 'Fechado no momento'}</ModalOpenNow>
            </Modal>
        </Wrapper>
    );
}
export default Home;