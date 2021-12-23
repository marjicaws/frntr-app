import { Routes , Route} from 'react-router-dom'
import Details from '../src/screens/Details/Details.js'

import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/products/:id"  element={<Details />}/>
     </Routes>
    </div>
  );
}

export default App;
