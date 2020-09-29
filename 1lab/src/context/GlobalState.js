import React, {createContext, useReducer} from 'react';
import { v4 as uuid } from "uuid";
import AppReducer from './AppReducer';

//State initiliazer

const initialState = {
    users: [
        {id: uuid(), firstName: 'Michael', lastName: 'Putvin', job: 'Manager', department: 'Accounting'},
        {id: uuid(), firstName: 'Alice', lastName: 'Wondervuna', job: 'Accountant', department: 'Accounting'},
        {id: uuid(), firstName: 'Will', lastName: 'Tomskin', job: 'Manager', department: 'Public Relations'}
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
    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    return (
        <GlobalContext.Provider value ={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}



