import './App.css';

function App() {
  return (
    <div className="App" style={{ 
    display: "flex", 
    justifyContent: "center", 
    border: "2.8px solid black", 
    padding: "10px", 
    margin: "0 300px",
    borderRadius: "10px"
}}>

        <h1>PASSWORD GENERATOR</h1>
        <input></input>
        character fjbefbwqei
  < input type = "range" ></input >
        <div><input type="checkbox"></input> Uppercase?</div>
        <div><input type="checkbox"></input> Lowercase?</div>
        <div><input type="checkbox"></input> Numbers?</div>
        <div><input type="checkbox"></input> Symbols?</div>
        <div>
          <h1 style={{border: "1px solid black"}}>Strength     </h1>
        </div>
    </div >
  );
}

export default App;
