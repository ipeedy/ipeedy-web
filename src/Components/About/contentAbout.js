import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandLight from '../../fonts/Quicksand/Quicksand-Light.ttf'; 

import FuctionOfAbout from './functionOfAbout.js';

class Content extends React.Component{
    render(){
        return(
            <Div>
                <FuctionOfAbout header="App playback options">
                    <Para>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem 
                        Ipsum
                    </Para>
                </FuctionOfAbout>
                <FuctionOfAbout header="App playback options">
                    <Para>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem 
                        Ipsum
                    </Para>
                </FuctionOfAbout>
                <FuctionOfAbout header="App playback options">
                    <Para>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem 
                        Ipsum
                    </Para>
                </FuctionOfAbout>
                <FuctionOfAbout header="App playback options">
                    <Para>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem 
                        Ipsum
                    </Para>
                </FuctionOfAbout>
                <FuctionOfAbout header="App playback options">
                    <Para>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem 
                        Ipsum
                    </Para>
                </FuctionOfAbout>
                <FuctionOfAbout header="App playback options">
                    <Para>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem 
                        Ipsum
                    </Para>
                </FuctionOfAbout>
                <FuctionOfAbout header="App playback options">
                    <Para>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem 
                        Ipsum
                    </Para>
                </FuctionOfAbout>
                <FuctionOfAbout header="App playback options">
                    <Para>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem 
                        Ipsum
                    </Para>
                </FuctionOfAbout>
                <FuctionOfAbout header="App playback options">
                    <Para>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem 
                        Ipsum
                    </Para>
                </FuctionOfAbout>
            </Div>
        )
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
    width: 70%;
    height: auto;
    margin-left: 30%;
    padding-left: 30px;
    padding-top: 80px;
    box-sizing: border-box;
`;

const Para = styled.p`
    padding: 0 30px;
    font-family: QuicksandLight;
    color: #444444;
`;

export default Content
