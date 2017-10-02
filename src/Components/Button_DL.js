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
    border-radius: 10px;
    padding: 0px 3px;
    outline: 0;
    border: 0;
    box-shadow: 0 0 10px 1px #c4c4c4;
    background-color: #364a84;
    color: #355067;
    font-seight: 500;
    transition: all 0.3s;
`;

export default Button;
