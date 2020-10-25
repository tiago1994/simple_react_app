import React, { createContext, useReducer } from "react";
import Reducer from './reducer'

const initialState = {
    adding: false,
    newCard: {
        title: '',
        count: ''
    },
    counters: [
        {
            id: 1,
            title: 'teste',
            count: "0001",
            active: false
        },
        {
            id: 2,
            title: 'teste2',
            count: "0002",
            active: false
        },
        {
            id: 3,
            title: 'teste3',
            count: "0003",
            active: true
        }
    ]
}

const store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default store;