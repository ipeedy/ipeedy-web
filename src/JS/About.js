import React from 'react';

import Sidebar from '../Components/About/sidebar.js';
import Content from '../Components/About/contentAbout.js';
import Footer from '../Components/Features/Footer.js';

class About extends React.Component {
    render() {
        return(
            <div>
                <Sidebar />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default About;
