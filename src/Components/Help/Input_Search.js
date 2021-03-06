import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Icon from '../../img/icon-Search-26.png';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandRegular from '../../fonts/Quicksand/Quicksand-Regular.ttf';

class Input extends React.Component {
    render() {
        return (
            <div>
                <Innput />
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
        font-family: QuicksandRegular;
        src: url('${QuicksandRegular}') format('opentype');
}
`;

const Innput = styled.input`
    width: 650px;
    height: 30px;
    margin: 5px 0;
    padding: 15px 0 15px 68px;
    outline: none;
    border: 1px solid #e1e7fa;
    border-radius: 10px;
    background: #fff url(${Icon}) no-repeat 25px center;
    font-size: 1.1em;
    color: #4362bd;
`;

export default Input;
