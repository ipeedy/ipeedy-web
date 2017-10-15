import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

import LogoText from '../img/branding/Logo_Text.png';
import Quicksand from '../fonts/Quicksand/Quicksand-Medium.ttf';

class Navbar extends React.Component {
    render() {
        return (
            <Div>
                <Layout>
                    <NavLink to="/"><Logo src={LogoText} /></NavLink>
                    <Button>Become a Shipper</Button>
                    <Tabs>
                        <NavLink style={styles.text} to="/about"><Item>About</Item></NavLink>
                        <NavLink style={styles.text} to="/help/seller"><Item>Help</Item></NavLink>
                        <NavLink style={styles.text} to="/login"><Item>Login</Item></NavLink>
                    </Tabs>
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
`;

const styles = {
    text: {
        textDecoration: 'none',
    },
};

const Div = styled.div`
    position: fixed;
    top: 0;
    display: block;
    width: 100%;
    height: auto;
    border-bottom: 1px solid #fafafa;
    background-color: #fff;
    font-family: Quicksand;
    z-index: 1000;
`;

const Layout = styled.div`
    max-width: 1024px;
    height: 40px;
    margin: 0 auto;
    padding: 20px 0;
`;

const Logo = styled.img`
    width: 141px;
    height: 40px;
    float: left:
`;

const Tabs = styled.div`
    width: auto;
    height: 40px;
    clear: left;
    float: right;
    margin: auto 0;
    padding: 0;
`;

const Item = styled.h5`
    display: inline;
    height: 40px;
    line-height: 40px;
    margin: 0 10px;
    color: #364a84;
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: 1.4px;
    &:hover {
        color: #537df8;
        padding-bottom: 2px;
        border-bottom: 2px solid #537df8;
    }
`;

const Button = styled.button`
    width: 145px;
    height: 40px;
    float: right;
    margin-left: 20px;
    border-radius: 5px;
    outline: none;
    border: 1.5px solid #364a84;
    background-color: #fff;

    color: #364a84;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 900;
    font-family: Quicksand;
    &:hover {
        background-color: #364a84;
        color: #fff;
    }
`;

export default Navbar;
