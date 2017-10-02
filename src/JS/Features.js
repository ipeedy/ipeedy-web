import React from 'react';

import Banner from '../Components/Banner.js';
import Container from '../Components/Features_Container.js';
import Download from '../Components/Download.js';
import Footer from '../Components/Footer.js';

class Features extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <Container />
                <Download />
                <Footer />
            </div>
        );
    }
}

export default Features;
