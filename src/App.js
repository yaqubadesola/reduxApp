import './App.css';
import {Provider} from "react-redux"
import {store} from "./store"
import Counter from './components/Counter';
function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <header className="App-header">
              <h1>REDUX COUNTER APP</h1>
              <Counter/>
          </header>
        </div>
    </Provider>
    
  );
}

export default App;
