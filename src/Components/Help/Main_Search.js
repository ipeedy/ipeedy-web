import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Pattern from '../../img/branding/Pattern.png';

import QuicksandRegular from '../../fonts/Quicksand/Quicksand-Regular.ttf';
import QuicksandLight from '../../fonts/Quicksand/Quicksand-Light.ttf';

import Input from './Input_Search.js';

class MainSearch extends React.Component {
    render() {
        return (
            <Div>
                <Layout>
                    <H2>Having trouble?</H2>
                    <H3>We're here to help</H3>
                    <Input />
                </Layout>
            </Div>
        );
    }
}

injectGlobal`
    @font-face {
        font-family: QuicksandRegular;
        src: url('${QuicksandRegular}') format('opentype');
    }
    @font-face {
        font-family: QuicksandLight;
        src: url('${QuicksandLight}') format('opentype');
    }
`;

const Div = styled.div`
    width: 100%;
    height: 350px;
    margin-top: 80px;
    background-color: red;
    background-image: url(${Pattern});
    background-color: #fbfbfb;
    display: flex;
    align-items: center;
`;

const Layout = styled.div`
    width: 100%;
    height: auto;
    margin-left: 80px;
`;

const H2 = styled.h2`
    font-family: QuicksandLight;
    color: #546aa8;
    font-size: 2.5em;
    line-height: 15px;
    font-weight: 900;
`;

const H3 = H2.extend`
    font-weight: 500;
`;
export default MainSearch;
