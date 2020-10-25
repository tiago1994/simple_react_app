import * as React from 'react';
import styled from 'styled-components'

const TopDefault = (props) => {
    return (
        <TopBar>{props.title}</TopBar>
    );
};

const TopBar = styled.Text`
    background-color: #001D47;
    padding: 30px 20px 20px 20px;
    color: #FFF;
    font-size: 36px;
    font-weight: bold;
`;

export default TopDefault;