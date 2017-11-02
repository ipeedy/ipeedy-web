import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandLight from '../../fonts/Quicksand/Quicksand-Light.ttf'; 

class Silebar extends React.Component{
    render() {
        return (
            <div>
                <Layout>
                    <StrongPara>App playback options</StrongPara>
                    <Para>Embed your app</Para>
                    <Para>Cross-document messages</Para>
                    <StrongPara>API overview</StrongPara>
                    <Para>Request an API token</Para>
                    <Para>Creating app</Para>
                    <Para>Updating apps</Para>
                    <Para>Deleting apps</Para>
                    <Para>Direct file uploads</Para>
                    <Para>Sample code</Para>
                    <StrongPara>Automate with Appium</StrongPara>
                    <Para>Appium server API</Para>
                    <Para>Network capture</Para>
                    <Para>Debug log</Para>
                </Layout>
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

const Layout = styled.div`
    box-sizing: border-box;
    position: fixed;
    width: 30%;
    height: 100vh;
    background-color: #fafafa;
    padding: 90px 0 0 80px;
    
    z-index: 999;
`;

const Para = styled.p`
    font-family: QuicksandLight;
    font-weight: bold;
    color: #3d4e7c;
`;

const StrongPara = Para.extend`
    font-family: Quicksand;
    font-weight: bold;
    color: #3d4e7c;
`;

export default Silebar
