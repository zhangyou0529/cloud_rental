import React from 'react';

import '../App.css';
import '../styles/globals.css'

import { Listingstwo } from '..'


export default function RankingPage() {
  return (
    <div style = {{position: 'relative'}}>
      <Listingstwo style = {{position: 'absolute', top: '100px',left:'250px'}}/>
    </div>
  );
}

