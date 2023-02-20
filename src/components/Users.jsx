import Wrapper from './Wrapper';

function Users(props) {
  return (
    <Wrapper>
      <div className="users">
        {props.users.map((user) => {
          return (
            <p key={Math.floor(Math.random() * 9999)}>
              {user.username} ({user.age} years old)
            </p>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Users;
