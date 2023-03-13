import * as React from 'react';
import Contacts from './Components/Contacts';
import './style.css';

export default function App() {
  const cde = [
    {
      id: 1,
      Name: 'a',
    },
    {
      id: 2,
      Name: 'b',
    },
  ];
  return (
    <div>
      <Contacts Contact={cde} />
    </div>
  );
}
