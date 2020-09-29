import React, {useContext} from 'react';
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
    const { addUser} = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = () => {
        const newUser = {
            id:4,
            firstName: 'Anatalija',
            lastName: 'Chezachanovska',
            job: 'returns manager',
            department: 'returns'
        }
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type="submit" >Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
