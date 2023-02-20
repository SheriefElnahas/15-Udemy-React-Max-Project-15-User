import { useState } from 'react';
import Wrapper from './Wrapper';

function User() {
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
      console.log('Please enter a valid name and age (non-empty values).');
      return;
    }

    if (userInfo.age < 0) {
      console.log('Please enter a valid age');
      return;
    }

    console.log(userInfo);
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

export default User;
