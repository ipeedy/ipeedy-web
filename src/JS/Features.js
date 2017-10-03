import React from 'react';

import Banner from '../Components/Features/Banner.js';
import Container from '../Components/Features/Features_Container.js';
import Download from '../Components/Features/Download.js';
import Footer from '../Components/Features/Footer.js';

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
