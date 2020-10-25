import * as React from 'react';
import styled from 'styled-components'
import { Context } from '../../store'

const NewCardCounter = (props) => {
    const [state, dispatch] = React.useContext(Context);

    return (
        <CardContainer>
            <NameCounter onChangeText={text => dispatch({type: 'ADD_TITLE', payload: text})} value={state.newCard.title} placeholder={'Type card name...'} />
            <ValueCounter onChangeText={text => dispatch({type: 'ADD_COUNT', payload: text})} value={state.newCard.count} placeholder={'0000'} />
        </CardContainer>
    );
};

const CardContainer = styled.TouchableOpacity`
    background-color: #D8D8D8;
    border-radius: 4px;
    padding: 20px;
    height: 180px;
    border: 3px solid #001D47;
    opacity: 1;
`;
const NameCounter = styled.TextInput`
    color: #999999;
    font-size: 24px;
    font-weight: bold;
`;
const ValueCounter = styled.TextInput`
    color: #333333;
    font-size: 65px;
    font-weight: bold;
    flex: 1;
    text-align: right;
`;

export default NewCardCounter;