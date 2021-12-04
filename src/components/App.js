import logo from '../assets/logo.svg';
import '../assets/App.css';
import Home from './Home'
import Navigation from "./Navigation";
import PollList from "./PollList";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Home />
        <PollList />
    </div>
  );
}

export default App;
