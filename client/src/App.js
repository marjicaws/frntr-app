import { Routes , Route} from 'react-router-dom'
import Details from '../src/screens/Details/Details.js'
import Home from '../src/screens/Home/Home.js'
import AboutUs from '../../client/src/screens/AboutUs/AboutUs'

import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/products/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
     </Routes>
    </div>
  );
}

export default App;
