import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Quicksand from '../../fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandRegular from '../../fonts/Quicksand/Quicksand-Regular.ttf';

class Input extends React.Component {
    render() {
        return (
            <div>
                <Innput />
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

const Innput = styled.input`
    width: 100px;
    height: 30px;
`;

export default Input;
