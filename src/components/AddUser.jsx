import { useState } from 'react';
import Wrapper from './Wrapper';

function AddUser({ onUserSubmit, onErrorSubmit }) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    age: '',
  });

  const handleChange = (e) => {
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserInfo({ username: '', age: '' });
    if (!userInfo.username || !userInfo.age) {
      onErrorSubmit('Please enter a valid name and age (non-empty values).');
      return;
    }

    if (userInfo.age <= 0) {
      onErrorSubmit('Please enter a valid age');
      return;
    }

    onUserSubmit(userInfo);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={userInfo.username} onChange={handleChange} />
        <br />
        <label htmlFor="age">Age(Years)</label>
        <input type="text" id="age" name="age" value={userInfo.age} onChange={handleChange} />
        <br />
        <button>Add User</button>
      </form>
    </Wrapper>
  );
}

export default AddUser;
