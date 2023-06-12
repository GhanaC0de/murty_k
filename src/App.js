import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Dashboard</h1>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
