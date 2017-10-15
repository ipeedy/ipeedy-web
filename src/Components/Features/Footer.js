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
    background-color: #dce6ff;
`;

const Layout = styled.div`
    margin-right: 8%;
    padding: 20px 0;
    font-size: 0.9em;
    color: #7b5e86;
`;

const Span = styled.span`
    font-size: 1.1em;
    font-weight: 600;
    color: #410f4b;
`;

export default Footer;
