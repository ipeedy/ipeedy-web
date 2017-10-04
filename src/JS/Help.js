import React from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Search from '../Components/Help/Search.js';
import SideNav from '../Components/Help/Side_Nav.js';
import Eaters from '../Components/Help/Item_Eaters.js';
import Partners from '../Components/Help/Item_Partners.js';
import Restaurants from '../Components/Help/Item_Restaurants.js';
import Seller from '../Components/Help/Item_Seller.js';
import Footer from '../Components/Features/Footer.js';

class Help extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <BrowserRouter>
                    <Layout>
                        <SideNav />
                        <Switch>
                            <Route exact path='/help' component={Seller} />
                            <Route path='/help/seller' component={Seller} />
                            <Route path='/help/partners' component={Partners} />
                            <Route path='/help/eaters' component={Eaters} />
                            <Route path='/help/restaurants' component={Restaurants} />
                        </Switch>
                    </Layout>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

const Layout = styled.div`
    display: table;
    width: 100%;
    height: auto;
    clear: both;
`;

export default Help;
