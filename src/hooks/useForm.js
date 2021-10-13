import { useState } from 'react';
export default (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target: { name, value } = {} }) => {
    setForm({ ...form, [name]: value });
  };

  const reset = () => {
    setForm(initialState);
  };

  return [form, handleChange, reset];
}