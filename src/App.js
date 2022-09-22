import './App.css';
import Homepage from './content/homepage/homepage';
import Navbar from './content/navbar/navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Homepage/>

    </div>
  );
}

export default App;
