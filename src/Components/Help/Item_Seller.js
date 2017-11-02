import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import IconAsk from '../../img/icon-Ask.png';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandLight from '../../fonts/Quicksand/Quicksand-Light.ttf';

import SupportPackage from './support_package.js';

class Seller extends React.Component {
    render() {
        return (
            <Div>
                <SupportPackage line1="Lorem ipsum dolor sit amet" 
                                line2="Lorem ipsum dolor sit amet" 
                                line3="Lorem ipsum dolor sit amet" 
                                line4="Lorem ipsum dolor sit amet" 
                                header="App playback options" />
                <SupportPackage line1="Lorem ipsum dolor sit amet" 
                                line2="Lorem ipsum dolor sit amet" 
                                line3="Lorem ipsum dolor sit amet" 
                                line4="Lorem ipsum dolor sit amet" 
                                header="App playback options" />
                <SupportPackage line1="Lorem ipsum dolor sit amet" 
                                line2="Lorem ipsum dolor sit amet" 
                                line3="Lorem ipsum dolor sit amet" 
                                line4="Lorem ipsum dolor sit amet" 
                                header="App playback options" />
                <SupportPackage line1="Lorem ipsum dolor sit amet" 
                                line2="Lorem ipsum dolor sit amet" 
                                line3="Lorem ipsum dolor sit amet" 
                                line4="Lorem ipsum dolor sit amet" 
                                header="App playback options" />
                <SupportPackage line1="Lorem ipsum dolor sit amet" 
                                line2="Lorem ipsum dolor sit amet" 
                                line3="Lorem ipsum dolor sit amet" 
                                line4="Lorem ipsum dolor sit amet" 
                                header="App playback options" />
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
        font-family: QuicksandLight;
        src: url('${QuicksandLight}') format('opentype');
    }
`;

const Div = styled.div`
    width: 74%;
    height: 450px;
    margin-top: 30px;
    padding: 0 3%;
    float: right;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export default Seller;
