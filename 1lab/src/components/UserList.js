import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'
import { Link } from 'react-router-dom';
import {
    ListGroup,
    Button
} from 'reactstrap';
export const UserList = () => {
    const { users , removeUser} = useContext(GlobalContext);
    return (
        <ListGroup className="mt-4">
            <table className="table">
            <thead className="thread-dark">
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Job</th>
                    <th scope="col">Department</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.job}</td>
                        <td>{user.department}</td>
                        <td className="ml-auto">
                        <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                            <Button onClick={() =>removeUser(user.id)} 
                            color="danger">Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
            
        </ListGroup>
    )
}