import * as React from 'react';
import styled from 'styled-components'
import { Context } from '../../store'

const NewCardCounter = (props) => {
    const [state, dispatch] = React.useContext(Context);

    return (
        <CardContainer>
            <NameCounter onChangeText={text => dispatch({type: 'ADD_TITLE', payload: text})} value={state.newCard.title} placeholder={'Type card name...'} />
            <ViewCounter>
                <ValueCounter onChangeText={text => dispatch({type: 'ADD_COUNT', payload: text})} value={state.newCard.count} placeholder={'0000'} />
            </ViewCounter>
        </CardContainer>
    );
};

const CardContainer = styled.TouchableOpacity`
    background-color: #D8D8D8;
    border-radius: 4px;
    padding: 20px;
    height: 160px;
    border: 3px solid #001D47;
    opacity: 1;
`;
const NameCounter = styled.TextInput`
    color: #999999;
    font-size: 24px;
    font-weight: bold;
    padding: 0px;
`;
const ValueCounter = styled.TextInput`
    color: #333333;
    font-size: 65px;
    padding: 0px;
    margin: 0px;
    font-weight: bold;
    flex: 1;
    text-align: right;
`;
const ViewCounter = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export default NewCardCounter;