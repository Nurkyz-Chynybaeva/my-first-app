import './App.css';
function Person(props) {
  let smokes = <strong>Ne kurit</strong>
  if (props.smokes) {
    smokes = <strong>Kurit</strong>
  }
 
 return <div className="person">
   <h1>{ props.name }</h1>
   <div className="age">{ props.age } years old</div>
   <p className="hobby">{ props.children }</p>
   <strong>{ smokes }</strong>
 </div>;
}

// ReactDOM.render(
//  <div>
   
//  </div>,
//  document.querySelector('body')
// );

function App() {
  return (
    <div className="App">
     
     <Person name="Elon Musk" age={41}>Listens to <strong>music</strong></Person>
   <Person name="Jeff Besos" age={55} smokes={true} />
   <Person name="Bill Gates" age={56} smokes={true}  hobbies={["Singing", "Dancing"]}>Travels</Person>

    </div>
  );
}

export default App;



