
import React from 'react';

import List from './components/List';
import Ol from './components/Ol';
import OrderedList from './components/OrderedList';
import Root from './components/Root';
// import Table from './components/Table';
// import Wealth from './components/Wealth';

function  App() {
  let richPeople = ["Elon Musk" , "Jeff Besos" , "Bikl Gathes"];
  // let peopleWealth = [
  //   { name : "Elon Mask", wealth: 358783297583},
  //   { name : "Jeff Mask", wealth: 877589383297583},
  //   { name : "Bill Mask", wealth: 358757389957387583297583}
  // ];


  return (

    let numbers = [9 , 12 , 25 ];

    <div className = "App">

      
<List items = {richPeople}/>
<Ol items = {richPeople}/>
<OrderedList items = {richPeople}/>
<Root items ={numbers} />
{/* <Table  /> */}
{/* <Wealth items = {peopleWealth} /> */}



    </div>
  )
};





export default App;


