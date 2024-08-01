import logo from './logo.svg';
import './App.css';
import { home, tech, navigation } from './constants';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './containers/Home';
import Tech from './containers/Tech';


function App() {
  // console.log(tech.verticals.product.people);
  return (
    <Router>
    <div className="App">
       <Navbar/>
       <Routes>
        {navigation.map((item)=>(
              <Route key={item.id} path={`/${item.url}`} element={item.component}/>
          ))}
      </Routes>
      </div>
    </Router>
      
  );
}

export default App;
