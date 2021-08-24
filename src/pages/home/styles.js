import Slider from 'react-slick';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
`;

export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 16px;
    }
`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    background-color: #fff;
    padding: 16px;
`;


export const Logo = styled.img`
    margin: 0px auto 30px;
    width: 200px;
    
`;

export const Map = styled.div `
    background-color: red;
    width: 500px;
`;

export const CarrouselTitle = styled.h1 `
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`;

export const ModalTitle = styled.h2 `
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-weight: 700;
    letter-spacing: .6px;
    margin: 16px 0;
`;

export const ModalDescription = styled.p `
    font-family: ${(props => props.theme.fonts.regular)};
    color: ${(props) => props.theme.colors.text};
    font-weight: 500;
    letter-spacing: .6px;
    margin: 8px 0;
`;

export const ModalOpenNow = styled.span `
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-weight: 700;
    letter-spacing: .6px;
    margin: 8px 0;
`;