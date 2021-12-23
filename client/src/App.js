import { Routes , Route} from 'react-router-dom'
import Details from '../src/screens/Details/Details.js'
import Home from '../src/screens/Home/Home.js'

import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/products/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
