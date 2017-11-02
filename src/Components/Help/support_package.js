import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import IconAsk from '../../img/icon-Ask.png';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandLight from '../../fonts/Quicksand/Quicksand-Light.ttf';

class SupportPackage extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Header>{this.props.header}</Header>
                <A>{this.props.line1}</A>
                <A>{this.props.line2}</A>
                <A>{this.props.line3}</A>
                <A>{this.props.line4}</A>
            </div>
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
    padding: 0px 0 0px 50px;
    background: url(${IconAsk}) 5px no-repeat;
    line-height: 30px;
    font-size: 1.1em;
    font-family: QuicksandLight;
    color: #364a84;
    font-weight: 600;
    &:hover {
        color: #d11a8d;
    }
`;

export default SupportPackage;
