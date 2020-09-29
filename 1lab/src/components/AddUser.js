import React, {useContext, useState} from 'react';
import {GlobalContext} from '../context/GlobalState'
import { Link, useHistory } from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from 'reactstrap';

export const AddUser = () => {
    const [firstName, setFirstName] = useState('');
    const { addUser} = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = () => {
        const newUser = {
            id:4,
            firstName: 'Anatalija',
            lastName: 'Chezachanovska',
            job: 'returns manager',
            deparment: 'Returns'
        }
        addUser(newUser);
        history.push('/');
        
        const onChange = (e) => {
            setFirstName(e.target.firsName);
        }
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>First Name</Label>
                <Input type="text" firsName ="firsName" value={firstName} placeholder="Enter First Name"></Input>
               
            </FormGroup>
            <Button type="submit" >Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
