import React from 'react';
import { hot } from 'react-hot-loader/root';
import Tester from './Tester';
import '../assets/tailwind.css';

const App = () => (
  <div>
    <h1 className="text-xl">hello typescript</h1>
    <Tester />
  </div>
);

export default hot(App);
