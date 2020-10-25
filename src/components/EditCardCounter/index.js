import * as React from 'react';
import styled from 'styled-components'
import { Context } from '../../store'

const EditCardCounter = (props) => {
    const [state, dispatch] = React.useContext(Context);
    
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
            <ViewCounter>
                <ValueCounter onChangeText={text => editLine(text, 'count')} value={props.count} placeholder={'0000'} />
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
    padding: 0px;
    margin: 0px;
    font-size: 65px;
    font-weight: bold;
    text-align: right;
`;
const ViewCounter = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export default EditCardCounter;