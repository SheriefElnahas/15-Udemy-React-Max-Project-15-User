import './App.css';
import { useState } from 'react';

import AddUser from './components/AddUser';
import Users from './components/Users';
import Modal from './components/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onUserSubmit = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };
  const onErrorSubmit = (errMessage) => {
    setError(errMessage);
  };

  const onCloseModal = () => {
    setShowModal(false);
    setError('');
  };

  return (
    <div className="App" onClick={onCloseModal}>
      <AddUser onUserSubmit={onUserSubmit} onErrorSubmit={onErrorSubmit} />
      <br />
      <Users users={users} />

      {error && <Modal error={error} onCloseModal={onCloseModal} />}
      {showModal && <Modal error={error} onCloseModal={onCloseModal} />}
    </div>
  );
}

export default App;
