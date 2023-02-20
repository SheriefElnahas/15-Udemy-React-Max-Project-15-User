import { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([]);

  const onUserSubmit = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div className="App">
      <AddUser onSubmit={onUserSubmit} />
      <br />
      <Users users={users} />
    </div>
  );
}

export default App;
