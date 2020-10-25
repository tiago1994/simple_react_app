import * as React from 'react';
import styled from 'styled-components'

const CardCounter = (props) => {
    if(!!props.active){
        return (
            <CardContainer onPress={() => props.activeCard()}>
                <NameCounter>{props.title}</NameCounter>
                <ValueCounter>{props.count}</ValueCounter>
            </CardContainer>
        );
    }else{
        return (
            <CardContainerOff onPress={() => props.activeCard()}>
                <NameCounter>{props.title}</NameCounter>
                <ValueCounter>{props.count}</ValueCounter>
            </CardContainerOff>
        );
    }
};

const CardContainer = styled.TouchableOpacity`
    background-color: #D8D8D8;
    border-radius: 4px;
    padding: 20px;
    height: 180px;
    border: 3px solid #001D47;
    opacity: 1;
`;
const CardContainerOff = styled.TouchableOpacity`
    background-color: #D8D8D8;
    border-radius: 4px;
    padding: 20px;
    height: 180px;
    border: 3px solid #001D47;
    opacity: .5;
`;
const NameCounter = styled.Text`
    color: #999999;
    font-size: 24px;
    font-weight: bold;
    flex: 1;
`;
const ValueCounter = styled.Text`
    color: #333333;
    font-size: 65px;
    font-weight: bold;
    flex: 1;
    text-align: right;
`;

export default CardCounter;