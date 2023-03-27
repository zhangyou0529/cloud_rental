import React from 'react';

import '../App.css';
import '../styles/globals.css'

import { Coloredbarchart1Collection } from '../ui-components';
import { Listingstwo } from '..'


export default function RankingPage() {
  return (
    <div style = {{position: 'relative'}}>
      <Listingstwo style = {{position: 'absolute', top: '100px',left:'250px'}}/>
      <Coloredbarchart1Collection style = {{position: 'absolute', top: '120px',left:'1050px'}}/>
    </div>
  );
}

