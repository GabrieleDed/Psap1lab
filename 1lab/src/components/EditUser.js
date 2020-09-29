import React, {useContext, useState, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Link, useHistory } from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from 'reactstrap';

export const EditUser = (props) => {
    const { editUser, users } = useContext(GlobalContext);
    const [selectedUser, setSelectedUser]  = useState({
        id: '',
        firstName: '',
        lastName: '',
        job: '',
        department: ''
    })
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(() =>{
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    } , [currentUserId, users])

    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        history.push("/")
    }    

    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>First Name</Label>
                <Input type="text" value={selectedUser.firstName} onChange={onChange} name="firstName" placeholder="Enter First Name" required></Input>

                <Label>Last Name</Label>
                <Input type="text" value={selectedUser.lastName} onChange={onChange} name="lastName" placeholder="Enter Last Name" required></Input>

                <Label>Job</Label>
                <Input type="text" value={selectedUser.job} onChange={onChange} name="job" placeholder="Enter Job" required></Input>

                <Label>Department</Label>
                <Input type="text" value={selectedUser.department} onChange={onChange} name="department" placeholder="Enter Department" required></Input>
            </FormGroup>
            <Button type="submit">Edit User</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}