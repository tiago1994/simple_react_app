import * as React from 'react';
import styled from 'styled-components'

const CardCounter = (props) => {
    if(!!props.active){
        return (
            <CardContainer onPress={() => props.activeCard()}>
                <NameCounter>{props.title}</NameCounter>
                <ViewCounter>
                    <ValueCounter>{props.count}</ValueCounter>
                </ViewCounter>
            </CardContainer>
        );
    }else{
        return (
            <CardContainerOff onPress={() => props.activeCard()}>
                <NameCounter>{props.title}</NameCounter>
                <ViewCounter>
                    <ValueCounter>{props.count}</ValueCounter>
                </ViewCounter>
            </CardContainerOff>
        );
    }
};

const CardContainer = styled.TouchableOpacity`
    background-color: #D8D8D8;
    border-radius: 4px;
    padding: 20px;
    height: 160px;
    border: 3px solid #001D47;
    opacity: 1;
`;
const CardContainerOff = styled.TouchableOpacity`
    background-color: #D8D8D8;
    border-radius: 4px;
    padding: 20px;
    height: 160px;
    border: 3px solid #001D47;
    opacity: .5;
`;
const NameCounter = styled.Text`
    color: #333333;
    font-size: 24px;
    font-weight: bold;
`;
const ViewCounter = styled.View`
    flex: 1;
    justify-content: flex-end;
`;
const ValueCounter = styled.Text`
    color: #333333;
    font-size: 65px;
    font-weight: bold;
    text-align: right;
`;

export default CardCounter;