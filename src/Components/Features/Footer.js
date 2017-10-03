import React from 'react';
import styled from 'styled-components';


class Footer extends React.Component {
    render() {
        return (
            <Div>
                <Layout>
                    © 2017
                    <Span> Ipeedy</Span>
                </Layout>
            </Div>
        );
    }
}

const Div = styled.div`
    width: 100%;
    display: block;
    text-align: right;
`;

const Layout = styled.div`
    margin-right: 8%;
    padding: 10px 0;
    font-size: 0.875em;
    color: #777;
`;

const Span = styled.span`
    font-size: 1.1em;
    font-weight: 600;
    color: #303030;
`;

export default Footer;
