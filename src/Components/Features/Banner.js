import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import LogoOutline from '../../img/branding/Logo_Outline.png';
import Pattern from '../../img/branding/Pattern.png';
import MinkMingle from '../../img/Android.png';

import Button from '../../Components/Features/Button_Banner.js';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandRegular from '../../fonts/Quicksand/Quicksand-Regular.ttf';

class Banner extends React.Component {
    render() {
        return (
            <Div>
                <Introduction>
                    <OutlineImg src={LogoOutline} />
                    <LayoutText>
                        <Headers>Market for the people, by the people.</Headers>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sitamet, consectetur adipisicing elit.</Text>
                        <Button>Learn more</Button>
                    </LayoutText>
                    <Img src={MinkMingle} />
                </Introduction>
            </Div>
        );
    }
}

injectGlobal`
    @font-face {
        font-family: Quicksand;
        src: url('${Quicksand}') format('opentype');
    }
    @font-face {
        font-family: QuicksandRegular;
        src: url('${QuicksandRegular}') format('opentype');
    }
`;

const Div = styled.div`
    margin-top: 80px;
    display: block;
    width: 100%;
    height: 550px;
    background-image: url(${Pattern});
    background-color: #fbfbfb;
    font-family: Quicksand;
`;

const Introduction = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
`;

const LayoutText = styled.div`
    position: absolute;
    width: 50%;
    height: 340px;
    left: 17%;
    bottom: 15%;
`;

const Img = styled.img`
    position: absolute;
    width: 222px;
    height: 450px;
    right: 10%;
    bottom: 8%;
    border-radius: 35px;
`;

const OutlineImg = styled.img`
    position: absolute;
    width: 350px;
    height: 325px;
    top: 30px;
    left: 7%;
    z-index: 0;
`;

const Headers = styled.h1`
    font-size: 3.5em;
    font-family: Quicksand;
    color: #69298f;
`;

const Text = styled.p`
    font-size: 1.2em;
    font-family: QuicksandRegular;
    color: #66258b;
`;

export default Banner;
