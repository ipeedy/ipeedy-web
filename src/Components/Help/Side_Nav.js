import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { NavLink } from 'react-router-dom';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandRegular from '../../fonts/Quicksand/Quicksand-Regular.ttf';

class SideNav extends React.Component {
    render() {
        return (
            <Div>
                <Layout>
                    <NavLink activeStyle={{color: '#7f46a0', borderColor: '#7f46a0'}} 
                             style={styles.Item} 
                             to="/help/seller">
                                For Seller
                    </NavLink>
                    <NavLink activeStyle={{color: '#7f46a0', borderColor: '#7f46a0'}}
                             style={styles.Item} 
                             to="/help/partners">
                                For Partners
                    </NavLink>
                    <NavLink activeStyle={{color: '#7f46a0', borderColor: '#7f46a0'}} 
                             style={styles.Item} 
                             to="/help/eaters">
                                For Eaters
                    </NavLink>
                    <NavLink activeStyle={{color: '#7f46a0', borderColor: '#7f46a0'}}
                             style={styles.Item} 
                             to="/help/restaurants">
                                For Restaurants
                    </NavLink>
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
        font-family: QuicksandRegular;
        src: url('${QuicksandRegular}') format('opentype');
    }
`;

const styles = {
    Item: {
        display: 'block',
        padding: '12px',
        borderLeft: '2px solid #c9c9c9',
        textDecoration: 'none',
        color: '#c9c9c9',
    },
};

const Div = styled.div`
    width: 25%;
    height: 600px;
    float: left;
`;

const Layout = styled.div`
    margin-top: 40px;
    margin-left: 17%;
    font-family: QuicksandRegular;
`;

export default SideNav;
