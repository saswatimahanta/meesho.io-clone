import logo from './logo.svg';
import './App.css';
import { home } from './constants';

function App() {
  console.log(home.journey.length);
  return (
    <div className="App">
      {
        home.journey.map((item, index)=>(
          <img key={index} src={item.image} height={100}/>
        ))
      }
    </div>
  );
}

export default App;
