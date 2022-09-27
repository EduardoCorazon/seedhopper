import './App.css';
import Introduction from './content/Introduction/introduction';
import Navbar from './content/navbar/navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>

      <div className='Homepages'>
        <Introduction/>

      </div>

    </div>
  );
}

export default App;
