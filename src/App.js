import './App.css';
import Heading from './components/frontHeading';
import ImagesDisplay from './components/ImagesDisplay';
import Navbar from './components/Navbar';
import SearchImage from './components/searchImage';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <Heading/>
      </header>
      <ImagesDisplay/>
    </div>
  );
}

export default App;
