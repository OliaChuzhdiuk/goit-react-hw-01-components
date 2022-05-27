import PropTypes from 'prop-types';
import s from '../FriendList/FriendList.module.css';
import FriendListItem from '../FriendList/FriendListItem';

function FriendList(friends) {
  return (
    <ul className={s.friend__list}>
      {friends.friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;