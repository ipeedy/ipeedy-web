import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandRegular from '../../fonts/Quicksand/Quicksand-Regular.ttf';

import Input from './Input_Search.js';

class Search extends React.Component {
    render() {
        return (
            <Div>
                <h2>Having trouble?</h2>
                <h3>We're here to help</h3>
                <Input />
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
    width: 100%;
    height: 400px;
    margin-top: 80px;
    background-color: red;
`;
export default Search;
