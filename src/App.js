import logo from './logo.svg';
import './App.css';
import { home, tech } from './constants';

function App() {
  console.log(tech.verticals.product.people);
  return (
    <div className="App">
      {
        tech.verticals.product.features.map((item, index)=>(
          <img key={index} src={item.image} height={100}/>
        ))
      }
      {
        tech.verticals.design.features.map((item, index)=>(
          <img key={index} src={item.image} height={100}/>
        ))
      }
      {
        tech.verticals.engineering.features.map((item, index)=>(
          <img key={index} src={item.image} height={100}/>
        ))
      }
      {
        tech.verticals.dataScience.features.map((item, index)=>(
          <img key={index} src={item.image} height={100}/>
        ))
      }
    </div>
  );
}

export default App;
