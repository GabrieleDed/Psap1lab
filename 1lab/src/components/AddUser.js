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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [job, setJob] = useState('');
    const [department, setDepartment] = useState('');
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuid(),
            firstName,
            lastName,
            job,
            department
        }
        console.log(newUser);
        addUser(newUser);
        history.push("/");
    }

    const onChange = (e) => {
        setFirstName(e.target.value);
    }

    const onChange2 = (e) => {
        setLastName(e.target.value);
    }

    const onChange3 = (e) => {
        setJob(e.target.value);
    }

    const onChange4 = (e) => {
        setDepartment(e.target.value);
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>First Name</Label>
                <Input type="text" firstName ="firstName" value={firstName} onChange={onChange} placeholder="Enter First Name" required></Input>
               
                <Label>Last Name</Label>
                <Input type="text" lastName ="lastName" value={lastName} onChange={onChange2} placeholder="Enter Last Name" required></Input>

                <Label>Job</Label>
                <Input type="text" job ="job" value={job} onChange={onChange3} placeholder="Enter Job" required></Input>

                <Label>Department</Label>
                <Input type="text" department ="department" onChange={onChange4} value={department} placeholder="Enter Department" required></Input>
            </FormGroup>
            <Button type="submit" >Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}