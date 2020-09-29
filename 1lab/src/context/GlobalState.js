import React, {Children, createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//State initiliazer

const initialState = {
    users: [
        {id: 1, firstname: 'Michael', lastName: 'Putvin', job: 'Manager', deparment: 'Accounting'},
        {id: 2, firstname: 'Alice', lastName: 'Wondervuna', job: 'Accountant', deparment: 'Accounting'},
        {id: 3, firstname: 'Will', lastName: 'Tomskin', job: 'Manager', deparment: 'Public Relations'}
    ]

};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value ={{
            users: state.users
        }}>
            {children}
        </GlobalContext.Provider>
    )
}