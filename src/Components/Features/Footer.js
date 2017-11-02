import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandLight from '../../fonts/Quicksand/Quicksand-Light.ttf';

class Footer extends React.Component {
    render() {
        return (
            <Div>
                <Layout>
                    <Content>
                        <Para>Follow Us</Para>
                        <Para>Terms & Policies</Para>
                        <Para>Contact Us</Para>
                    </Content>
                    <Content2>
                        © 2017
                        <Span> Ipeedy</Span>
                    </Content2>
                </Layout>
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
    width: 100%;
    display: block;
    text-align: right;
    background-color: #243644;
    font-family: QuicksandLight;
    color: #afafaf;
`;

const Layout = styled.div`
    position: relative;
    padding: 20px 0;
    font-size: 0.9em;
`;

const Content = styled.div`
    max-width: 350px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`;

const Content2 = styled.div`
    position: absolute;
    right: 100px;
    top: 19px;
`;

const Para = styled.p`
    margin: 0;
    text-decoration: underline;
    &:hover {
        color: #fafafa;
    }
`;

const Span = styled.span`
    font-size: 1.1em;
    font-weight: 600;
`;

export default Footer;
