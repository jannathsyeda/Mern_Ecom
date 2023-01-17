import { React, useEffect, useState } from "react";
import { Link,  useNavigate, useSearchParams } from "react-router-dom";
import { Col, Row, Image, ListGroup, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Message from "../Components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userAction";
const UserListScreen = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    

    useEffect(() => {
        if(userInfo && userInfo.isAdmin) {
             dispatch(listUsers())   
        }else{
            navigate('/login')
        }
        
    }, [dispatch])




  return (
    <div>
        <h1>Users</h1>
        {loading ? <h2>Loading...</h2> : error ? <Message variant='danger'>{error}</Message> : (
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ADMIN</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td><a href={`mailto
                            :${user.email}`}>{user.email}</a></td>
                            <td>
                                {user.isAdmin ? (
                                    <i className='fas fa-check' style={{color: 'green'}}></i>
                                ) : (
                                    <i className='fas fa-times' style={{color: 'red'}}></i>
                                )}
                            </td>
                            <td>
                                <Link to={`/admin/user/${user._id}/edit`}>
                                    <Button variant='light' className='btn-sm'>
                                        <i className='fas fa-edit'></i>
                                    </Button>
                                </Link>
                                <Button variant='danger' className='btn-sm'>

                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default UserListScreen