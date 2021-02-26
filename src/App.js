import React from 'react';
import Sum from './components/Sum';
import RandomNumber from './components/RandomNumber';
import BiggerNumber from './components/BiggerNumber';
import Age from './components/Age';
import Book from './components/Book';



function App() {
  return(
  <div className= "App">
<Sum a ="5" b = "14" />
<RandomNumber min = "1"  max = "5" />
<BiggerNumber a = "5" b= "9"/>
<Age year = "2002"/>
<Book name = "Алхимик" autor = "Паулэ Коэльо" />


  </div>
)}


export default App;









