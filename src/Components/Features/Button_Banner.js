import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandRegular from '../../fonts/Quicksand/Quicksand-Regular.ttf';

class Button extends React.Component {
    render() {
        return (
            <CButton>{this.props.children}</CButton>
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

const CButton = styled.button`
    margin: 3px 6px;
    padding: 10px 45px;
    border-radius: 5px;
    outline: 0;
    border: 0;
    box-shadow: 0px 3px 15px 1px #d3a9eb;
    background-color: #fff;
    color: #66258b;
    font-size: 1.3em;
    font-seight: 500;
    font-weight: 600;
    font-family: Quicksand;
    transition: all 0.3s;
    &:hover {
        margin: 0;
        padding: 13px 50px;
        font-size: 1.35em;
        box-shadow: 1px 2px 20px 2px #d3a9eb;
        border-radius: 5px;
    }
`;

export default Button;
