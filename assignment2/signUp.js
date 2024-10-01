import React, { useState } from 'react';
import axios from 'axios'; //npm install axios
import './style.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', { email, password, age, name });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error signing up!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
      type = "number"
      value = {age}
      onChange = {(e) => setAge(e.target.value)}
      placeholder='Age'
      />
      <input
      type = "text"
      value = {name}
      onChange={(e) => setName(e.target.value)}
      placeholder='Name'/>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
