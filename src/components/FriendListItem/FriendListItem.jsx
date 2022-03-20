
import { Item, Status, Avatar } from './FriendItem.styled'

export const FriendListItem = ({id, avatar, name, isOnline}) => {
    return (
        <Item key={id} >
  <Status isOnline={isOnline}></Status>
  <Avatar src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
</Item>
    )

}

