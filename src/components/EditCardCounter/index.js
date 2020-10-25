import * as React from 'react';
import styled from 'styled-components'
import { Context } from '../../store'

const EditCardCounter = (props) => {
    const [dispatch] = React.useContext(Context);

    const editLine = (text, type) => {
        const new_payload = {
            id: props.id,
            title: type == 'title' ? text : props.title,
            count: type == 'count' ? text : props.count
        }
        dispatch({ type: 'EDIT_CARD', payload: new_payload })
    }

    return (
        <CardContainer>
            <NameCounter onChangeText={text => editLine(text, 'title')} value={props.title} placeholder={'Type card name...'} />
            <ValueCounter onChangeText={text => editLine(text, 'count')} value={props.count} placeholder={'0000'} />
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

export default EditCardCounter;