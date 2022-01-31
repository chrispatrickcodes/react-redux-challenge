import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers, getUsers } from './usersSlice';
import { selectUser, deselectUser } from './selectUsersSlice'
import DetailedUsers from '../../components/DetailedUsers';


export const UsersList = () => {
    const dispatch = useDispatch();
    const usersData = useSelector(selectAllUsers);

    const [usersList, setUsersList] = useState([]);
    // const [selectedUsers, setSelectedUsers] = useState([]);

    const userStatus = useSelector(state => state.users.status);
    const selectedUsers = useSelector(state => state.selectedUsers.selectedUsers);

    useEffect(() => {
        if (userStatus === 'idle') {
            dispatch(getUsers());
        }

    }, [userStatus, dispatch]);

    useEffect(() => {
        if (usersData.length > 0) {
            setUsersList(usersData[0].users)
        }
    }, [usersData]);


    const handleSelection = (e) => {
        if (e.target.checked) {
            //     const selectedUsersHolder = [...selectedUsers];
            const selectedUser = usersList.find(u => u.id == e.target.value);
            //     selectedUsersHolder.push(selectedUser);
            //     setSelectedUsers(selectedUsersHolder);
            dispatch(selectUser(selectedUser));
        }
        if (!e.target.checked) {
            dispatch(deselectUser(e.target.value));
        }
        //     setSelectedUsers(selectedUsers.filter(u => {
        //         return u.id != e.target.value;
        //     }))

    }

    const renderUsers = usersList.length > 0 ? usersList.map(user => {
        return (
            <ul>
                <li key={user.id}>
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.company}</p>
                    </div>
                    <input type='checkbox' value={user.id} onClick={handleSelection} />
                </li>
            </ul>
        )
    }) :
        <div></div>

    return (
        <div className='users-ctr'>
            <div className='user-basic__info'>
                <h3>Users</h3>
                <hr id='hr'></hr>
                {renderUsers}
            </div>
            <div className='users-detailed__info'>
                <DetailedUsers selectedUsers={selectedUsers} />
            </div>
        </div>
    )
}