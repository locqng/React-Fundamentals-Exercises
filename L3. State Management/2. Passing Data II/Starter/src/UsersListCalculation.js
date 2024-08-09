const UserListCalculation = ({userIds, usersList}) => {
    return <ul>
        {
            userIds.map((userId) => {
                return <li key={userId}>{usersList[userId].name}</li>
            })
        }
    </ul>
}

export default UserListCalculation; 