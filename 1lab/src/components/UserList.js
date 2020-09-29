import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
export const UserList = () => {
    const { users , removeUser} = useContext(GlobalContext);
    return (
        <ListGroup className="mt-4">
            <table className="table">
            <thead clasName="thread-dark">
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
                    <tr>
                        <td scope="row">{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.job}</td>
                        <td>{user.deparment}</td>
                        <div className="ml-auto">
                            <Link className="btn btn-warning mr-1" to={`edit/$
                            {user.id}`}>Edit</Link>
                            <Button onClick={() =>removeUser(user.id)} 
                            color="danger">Delete</Button>
                        </div>
                    </tr>
                ))}
            </tbody>
        </table>
            
        </ListGroup>
    )
}
