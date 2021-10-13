import { useState } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm handleSubmit={handleSubmit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map((user, i) => (
              <li key={i}>
                <span>{user.name}</span> <span>{user.lastName}</span> - <strong>{user.email}</strong>
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
