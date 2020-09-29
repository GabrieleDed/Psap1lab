import React, {Children, createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//State initiliazer

const initialState = {
    users: [
        {id: 1, firstName: 'Michael ', lastName: 'Putvin ', job: 'Manager ', deparment: 'Accounting'},
        {id: 2, firstName: 'Alice ', lastName: 'Wondervuna ', job: 'Accountant ', deparment: 'Accounting'},
        {id: 3, firstName: 'Will ', lastName: 'Tomskin ', job: 'Manager ', deparment: 'Public Relations'}
    ]

};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
//Actions
    const removeUser = (id) =>{
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }
    const addUser = (user) =>{
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }

    return (
        <GlobalContext.Provider value ={{
            users: state.users,
            removeUser,
            addUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}