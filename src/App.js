import List from './components/List';
import Ol from './components/Ol';


function  App() {
  let richPeople = ["Elon Musk" , "Jeff Besos" , "Bikl Gathes"];

  return (
    <div className = "App">
<List items = {richPeople}/>
<Ol items = {richPeople}/>
    </div>
  )
  
}

export default App;


