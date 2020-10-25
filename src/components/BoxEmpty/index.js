import * as React from 'react';
import styled from 'styled-components'

const BoxEmpty = (props) => {
    return (
        <>
            <TextEmptyBig>No cards found!</TextEmptyBig>
            <TextEmpty>You can add cards on the config screen.</TextEmpty>
        </>
    );
};

const TextEmptyBig = styled.Text`
    font-size: 32px;
    text-align: center;
    color: #FFF;
    margin-bottom: 10px;
`;
const TextEmpty = styled.Text`
    font-size: 22px;
    text-align: center;
    color: #FFF;
`;
export default BoxEmpty;