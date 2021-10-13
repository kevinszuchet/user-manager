import { useState } from 'react';
import useForm from './hooks/useForm';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';
import Button from './components/Button';

function App() {
  const [users, setUsers] = useState([]);
  const [form, handleChange, reset] = useForm({ name: '', lastName: '', email: '' });

  const handleSubmit = e => {
    e.preventDefault();
    setUsers([...users, form]);
    reset();
  };

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={handleSubmit}>
              <Input 
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                label="Name"
                />
              <Input 
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                label="Last name"
                />
                <Input 
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  label="Email"
                  />
                <Button>Enviar</Button>
            </form>
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
