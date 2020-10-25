import * as React from 'react';
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'
import TopDefault from '../../components/TopDefault'
import { Context } from '../../store'
import CardCounter from '../../components/CardCounter'
import BoxEmpty from '../../components/BoxEmpty'

const CountersScreen = (props) => {
    const [state, dispatch] = React.useContext(Context);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopDefault title={'Counters'} />
            <Container contentContainerStyle={{ flexGrow: 1, justifyContent: state.counters.length == 0?'center':'flex-start', paddingBottom: 40 }}>
                {state.counters.length == 0 && <BoxEmpty></BoxEmpty>}
                {state.counters.map((c, k) => {
                    return (
                        <BoxCard key={k}>
                            <CardCounter activeCard={() => dispatch({ type: 'CHANGE_ACTIVE', payload: c.id })} title={c.title} count={c.count} active={c.active} />
                        </BoxCard>
                    )
                })}
            </Container>
        </SafeAreaView>
    );
};

const Container = styled.ScrollView`
    background-color: #0282C8;
    padding: 20px 20px;
    flex: 1;
`;

const BoxCard = styled.View`
    margin-top: 15px;
    margin-bottom: 15px;
`;

export default CountersScreen;