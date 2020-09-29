import React, {useContext, useState} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from 'reactstrap';

export const AddUser = () => {
    const [user, setUser] = useState({
        id: uuid(),
        firstName: '',
        lastName: '',
        job: '',
        department: ''
    });
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        addUser(user);
        history.push("/");
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>First Name</Label>
                <Input type="text" name ="firstName" value={user.firstName} onChange={onChange} placeholder="Enter First Name" required></Input>
               
                <Label>Last Name</Label>
                <Input type="text" name ="lastName" value={user.lastName} onChange={onChange} placeholder="Enter Last Name" required></Input>

                <Label>Job</Label>
                <Input type="text" name ="job" value={user.job} onChange={onChange} placeholder="Enter Job" required></Input>

                <Label>Department</Label>
                <Input type="text" name ="department" onChange={onChange} value={user.department} placeholder="Enter Department" required></Input>
            </FormGroup>
            <Button type="submit" >Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}