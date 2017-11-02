import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandLight from '../../fonts/Quicksand/Quicksand-Light.ttf'; 

class FuctionOfAbout extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                <Div>
                    <Header1>{this.props.header}</Header1>
                    {this.props.children}
                </Div>
            </div>
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

`;

const Header1 = styled.h1`
    font-family: Quicksand;
    font-size: 1.35em;
    color: #5f3059;
`;

export default FuctionOfAbout
