import React, {useState} from 'react';
import WishListView from './components/WishListView';

const App = ({group}) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const onSelectUser = event => {
    setSelectedUser(group.users.get(event.target.value));
  };

  return (
    <div>
      <button onClick={group.reload}>刷新</button>
      <br/>

      <select onChange={onSelectUser}>
        <option>- select user -</option>
        {Array.from(group.users.values()).map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {selectedUser && <WishListView list={selectedUser.wishList}/>}
      {selectedUser && <button onClick={selectedUser.getSuggestions}>建议数据</button>}
    </div>
  );
};

export default App;