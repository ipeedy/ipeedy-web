import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import Button from '../../Components/Features/Button_DL.js';
import PlayStore from '../../img/play-store.png';
import Appstore from '../../img/appstore.png';

class Download extends React.Component {
    render() {
        return (
            <Div>
                <Headers>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Adipisci eos iste veritatis.
                </Headers>
                <Paragraphs>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Illo quae voluptatum accusantium aliquam ipsum debitis aut,
                </Paragraphs>
                <Down>
                    <Button><Img src={PlayStore}/></Button>
                    <Button><Img src={Appstore}/></Button>
                </Down>
            </Div>
        );
    }
}

injectGlobal`
    @font-face {
        font-family: Quicksand;
        src: url('${Quicksand}') format('opentype');
    }
`;

const Div = styled.div`
    width: 100%;
    height: 400px;
    background-color: #f6f6f6;
    font-family: Quicksand;
`;

const Headers = styled.h1`
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 50px 0 20px 0;
    font-size: 2.3em;
    color: #b5187a;
`;

const Paragraphs = styled.p`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    color: #d33598;
`;

const Down = styled.div`
    margin: 50px 0;
    text-align: center;
`;

const Img = styled.img`
    width: 150px;
    height: 50px;
    margin-top: 3px;
`;
export default Download;
