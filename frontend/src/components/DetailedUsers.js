const DetailedUsers = (props) => {

    return (
        <div className='detailed-users_ctr'>
            {props.selectedUsers !== 'undefined' ? props.selectedUsers.map(u => {
                return (
                    <div className='detailed-user__info' key={u.name}>
                        <h2>{u.name}</h2>
                        <h3>{u.company} - {u.position}</h3>
                        <p>Age: {u.profile.age}</p>
                        <p>Gender: {u.profile.gender}</p>
                        <p>planet: {u.profile.planet}</p>
                        <p>species: {u.profile.species}</p>
                        <p>status: {u.profile.status}</p>
                    </div>
                    )
            }) : <div></div>}
        </div>
    )
}

export default DetailedUsers;