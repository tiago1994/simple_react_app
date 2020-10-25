import * as React from 'react';
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'
import TopDefault from '../../components/TopDefault'
import { Context } from '../../store'
import EditCardCounter from '../../components/EditCardCounter'
import NewCardCounter from '../../components/NewCardCounter'
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const ConfigScreen = (props) => {
    const [state, dispatch] = React.useContext(Context);
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <TopDefault title={'Config'} />
                <Container>
                    <BoxActions>
                        <LabelConfig>Counters</LabelConfig>
                        <Buttons>
                            {state.adding?(
                                <ButtonDefault onPress={() => dispatch({type: 'SAVE_NEW'})}>
                                    <ButtonDefaultText>{`Save\nCounter`}</ButtonDefaultText>
                                </ButtonDefault>
                            ):(
                                <ButtonDefault onPress={() => dispatch({type: 'ADD_NEW'})}>
                                    <ButtonDefaultText>{`Add\nCounter`}</ButtonDefaultText>
                                </ButtonDefault>
                            )}
                            <ButtonDefault onPress={() => dispatch({type: 'REMOVE_ACTIVE'})}>
                                <ButtonDefaultText>{`Remove\nCounter`}</ButtonDefaultText>
                            </ButtonDefault>
                        </Buttons>
                    </BoxActions>
                    <BoxActions>
                        {state.adding?(
                            <OptionsNewCounter>
                                <LabelConfig>New Counter</LabelConfig>
                                <ViewCancel onPress={() => dispatch({type: 'STOP_NEW'})}>
                                    <LabelCancel><Icon name="trash" size={18} color={'#19477D'} /> Cancel</LabelCancel>
                                </ViewCancel>
                            </OptionsNewCounter>
                        ):(
                            <ViewSelect>
                                <LabelConfig>Selected Counter</LabelConfig>
                            </ViewSelect>
                        )}
                        {!state.adding && state.counters.map((c, k) => {
                            if(c.active){
                                return <EditCardCounter title={c.title} count={c.count} active={c.active} id={c.id} key={k}/>
                            }
                        })}
                        {state.adding&&(
                            <NewCardCounter />
                        )}
                    </BoxActions>
                </Container>
            </SafeAreaView>
            {state.showMessage&&(
                <ViewModal>
                    <BoxModal>
                        <TextBox>{state.message}</TextBox>
                        <ButtonModal onPress={() => dispatch({type: 'OK_MESSAGE'})}>
                            <TextButtonModal>Ok</TextButtonModal>
                        </ButtonModal>
                    </BoxModal>
                </ViewModal>
            )}
        </>
    );
};

const Container = styled.ScrollView`
    background-color: #0282C8;
    padding: 20px 20px;
    flex: 1;
`;

const BoxActions = styled.View`
    margin-bottom: 30px;
`;

const Buttons = styled.View`
    flex-direction: row;
`;

const LabelConfig = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: #151515;
    margin-bottom: 10px;
    flex: 1;
`;

const ViewCancel = styled.TouchableOpacity`
    justify-content: center;
    background-color: #D8D8D8;
    padding: 10px;
    border-radius: 4px;
`;

const LabelCancel = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #19477D;
    text-align: center;
    
`;

const OptionsNewCounter = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
    height: 45px;
`;

const ViewSelect = styled.View`
    height: 45px;
    margin-bottom: 10px;
`;

const ButtonDefault = styled.TouchableOpacity`
    background-color: #D8D8D8;
    flex: 1;
    padding: 10px;
    margin: 3px;
    border-radius: 4px;
`;

const ButtonDefaultText = styled.Text`
    text-align: center;
    color: #19477D;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
`;

const ViewModal = styled.View`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backgroundColor: rgba(0, 0, 0, .5);
    justify-content: center;
    align-items: center;
`;

const BoxModal = styled.View`
    background-color: #FFF;
    padding: 40px 20px;
    width: 90%;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.Text`
    color: #151515;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
`;

const ButtonModal = styled.TouchableOpacity`
    color: #FFF;
    background-color: #0282C8;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 4px; 
`;

const TextButtonModal = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

export default ConfigScreen;