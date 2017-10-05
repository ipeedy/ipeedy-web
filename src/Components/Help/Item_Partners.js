import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import IconAsk from '../../img/icon-Ask.png';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandLight from '../../fonts/Quicksand/Quicksand-Light.ttf';

class Partners extends React.Component {
    render() {
        return (
            <Div>
                <Box>
                    <Header>Lorem ipsum dolor</Header>
                    <A>Lorem ipsum dolor sit amet</A>
                    <A>Lorem ipsum dolor sit amet</A>
                    <A>Lorem ipsum dolor sit amet</A>
                    <A>Lorem ipsum dolor sit amet</A>
                </Box>
                <Box>
                    <Header>Lorem ipsum dolor</Header>
                    <A>Lorem ipsum dolor sit amet</A>
                    <A>Lorem ipsum dolor sit amet</A>
                    <A>Lorem ipsum dolor sit amet</A>
                    <A>Lorem ipsum dolor sit amet</A>
                </Box>
                <Box>
                    <Header>Lorem ipsum dolor</Header>
                    <A>Lorem ipsum dolor sit amet</A>
                    <A>Lorem ipsum dolor sit amet</A>
                    <A>Lorem ipsum dolor sit amet</A>
                    <A>Lorem ipsum dolor sit amet</A>
                </Box>
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

const Box = styled.div`
    width: 28%;
    height: 200px;
`;

const Header = styled.h1`
    display: block;
    margin: 0 0 3px 0;
    padding: 4px 0;
    border-bottom: 1px solid #6a81c4;
    font-size: 1.5em;
    font-family: QuicksandLight;
    color: #364a84;
`;

const A = styled.a`
    display: block;
    margin: 6px 0 6px 10px;
    padding: 3px 0 5px 50px;
    background: url(${IconAsk}) 5px no-repeat;
    font-size: 1.1em;
    font-family: QuicksandLight;
    color: #364a84;
    font-weight: 600;
    &:hover {
        color: #d11a8d;
    }
`;

export default Partners;
