import React, { useState } from 'react';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(form);
    alert(`Data submitted: \n${JSON.stringify(form, null, 2)}`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h1>Contact</h1>
      <p>Send us a message!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </label>
        <br /> <br />
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
        <br /> <br />
        <label>
          Message: <br />
          <textarea name="message" value={form.message} onChange={handleChange} />
          <br />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
