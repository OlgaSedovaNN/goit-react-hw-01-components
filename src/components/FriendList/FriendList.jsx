import PropTypes from 'prop-types'
import { FriendListItem } from '../FriendListItem/FriendListItem'
import { ListOfFriends } from "./FriendList.styled"


export const FriendList = ({ friends }) => {
    return (
        <ListOfFriends>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            ))}
        </ListOfFriends>
    )
}
    FriendList.propTypes = {
        friends: PropTypes.arrayOf(
            PropTypes.exact({
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                isOnline: PropTypes.bool.isRequired,
                id: PropTypes.number.isRequired,
            })
        ),
    };