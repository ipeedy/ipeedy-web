import React from 'react';
import styled from 'styled-components';

class Button extends React.Component {
    render() {
        return (
            <CButton>{this.props.children}</CButton>
        );
    }
}

const CButton = styled.button`
    margin: 3px 6px;
    padding: 10px 45px;
    border-radius: 5px;
    outline: 0;
    border: 0;
    box-shadow: 0 0 10px 1px #b27cd1;
    background-color: #fff;
    color: #66258b;
    font-size: 1.3em;
    font-seight: 500;
    transition: all 0.3s;
    &:hover {
        margin: 0;
        padding: 13px 50px;
        fontSize: 1.35em;
        box-shadow: 0 0 25px 1px #b27cd1;
        border-radius: 5px;
    }
`;

export default Button;
