import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import jeffSheldon from '../../img/jeff-sheldon-2556.jpg';
import eatersCollective from '../../img/eaters-collective-129481.jpg';
import clemOnoJeghuo from '../../img/clem-onojeghuo-174739.jpg';

import Quicksand from '../../fonts/Quicksand/Quicksand-Bold.ttf';
import QuicksandRegular from '../../fonts/Quicksand/Quicksand-Regular.ttf';

class Container extends React.Component {
    render() {
        return (
            <div style={styles.div} >
                <Box>
                    <Img src={jeffSheldon} />
                    <Content>
                        <Header>LIVE MODERATED TESTING</Header>
                        <Paragraphs>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Illo quae voluptatum accusantium aliquam ipsum debitis aut, 
                            recusandae molestiae, nihil praesentium, numquam earum corporis 
                            magnam suscipit pariatur fuga placeat beatae, architecto.
                        </Paragraphs>
                        <Span><em>
                            Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit. Adipisci eos iste veritatis animi, enim quisquam sequi 
                            esse in optio?</em>
                        </Span>
                    </Content>
                </Box>
                <Box>
                    <ImgF src={eatersCollective} />
                    <ContentF>
                        <Header2>LIVE MODERATED TESTING</Header2>
                        <Paragraphs2>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Illo quae voluptatum accusantium aliquam ipsum debitis aut, 
                            recusandae molestiae, nihil praesentium, numquam earum 
                            corporis magnam suscipit pariatur fuga placeat beatae, 
                            architecto.
                        </Paragraphs2>
                        <Span><em>
                            Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit. Adipisci eos iste veritatis animi, enim quisquam sequi 
                            esse ?</em>
                        </Span>
                    </ContentF>
                    <Clear />
                </Box>
                <Box>
                    <Img3 src={clemOnoJeghuo} />
                    <Content>
                        <Header3>LIVE MODERATED TESTING</Header3>
                        <Paragraphs3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Illo quae voluptatum accusantium aliquam ipsum debitis aut, 
                            recusandae molestiae, nihil praesentium, numquam earum 
                            corporis magnam suscipit pariatur fuga placeat beatae, 
                            architecto.
                        </Paragraphs3>
                        <Span><em>Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit. Adipisci eos iste veritatis animi, enim quisquam sequi 
                            esse in optio?</em>
                        </Span>
                    </Content>
                </Box>
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
        font-family: QuicksandRegular;
        src: url('${QuicksandRegular}') format('opentype');
    }
`;

const styles = {
    div: {
        display: 'block',
        width: '100%',
        height: 'auto',
        marginTop: '80px',
    },
};

const Clear = styled.div`
    clear: both;
`;

const Box = styled.div`
    display: block;
    width: 100%;
    margin-bottom: 120px;
`;

const Img = styled.img`
    max-width: 52%;
    max-height: 470px;
    border-radius: 0px 15px 15px 0px;
    box-shadow: 0 2px 8px 1px #ca9cfc;
`;

const Content = styled.div`
    max-width: 32%;
    margin: 4% 10% 0 0;
    float: right;
`;

const ImgF = styled.img`
    float: right;
    max-width: 52%;
    max-height: 470px;
    box-shadow: 0 2px 8px 1px #d29cfc;
    border-radius: 15px 0px 0px 15px;
`;

const ContentF = styled.div`
    text-align: right;
    max-width: 32%;
    float: left;
    margin: 4% 0 0 9%;
`;

const Img3 = Img.extend`
    box-shadow: 0 2px 8px 1px #ffb4e4;
`;

const Header = styled.h1`
    font-size: 1.9em;
    color: #6c00ac;
    font-family: Quicksand;
`;

const Paragraphs = styled.p`
    font-size: 1.15em;
    font-family: Quicksand;
    color: #8200ce;
    letter-spacing: -0.015em;
`;

const Span = styled.span`
    font-size: 0.95em;
    font-family: QuicksandRegular;
    font-weight: 600;
    color: #a7a1aa;
`;

const Header2 = Header.extend`
    color: #c44cb3;
`;

const Paragraphs2 = Paragraphs.extend`
    color: #c75db8;
`;

const Header3 = Header.extend`
    color: #e4209f;
`;

const Paragraphs3 = Paragraphs.extend`
    color: #e737a9;
`;


export default Container;
