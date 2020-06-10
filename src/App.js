import React from 'react';
import Dinner from './dinner.js';

function MyApp()
 {
return ( <div>
 <Dinner dishname="biryani" desert="kheer"/>
 <Dinner dishname="tikka" desert="sawaiya"/>
 <Dinner dishname="karahi" desert="halwa"/>
 </div>
 )
}

export default MyApp;
