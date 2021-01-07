import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Components
import SelectParty from './components/SelectParty/SelectParty';

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Descent 2E Party Tracker</h1>

      <SelectParty />

      {/* Character Tracker  */}
      
      
    </div>
  );
}

export default App;
