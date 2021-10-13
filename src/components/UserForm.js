import useForm from '../hooks/useForm';
import Input from './Input';
import Button from './Button';

const UserForm = (props) => {
  const [form, handleChange, reset] = useForm({ name: '', lastName: '', email: '' });

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(form);
    reset();
  };

  return (
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
  );
}

export default UserForm;