import componentePai from "./components/componentePai"
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Olá {props.name}</h1>
      <strong>{props.primeira}</strong>
      <componentePai
        terceira={"Essa props será renderizada no ComponentePai.js"}
        quarta={props.segunda}
      />
    </div>
  );
}

export default App;