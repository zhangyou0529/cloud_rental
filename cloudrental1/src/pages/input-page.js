import React from 'react';

import '../App.css';
import '../styles/globals.css'

import  CustomerCreateForm  from '../CustomerCreateForm';


export default function InputPage() {
  return (
    <div style = {{display: 'flex', alignItems: "center", justifyContent: "center", height: "100%"}}>
      <div style = {{position: 'absolute', top: '100px'}}>
        <h1>Tell us more about yourself and your preference</h1>
      </div>
      <CustomerCreateForm style = {{position: 'absolute', top: '150px'}}/>
    </div>
  );
}
