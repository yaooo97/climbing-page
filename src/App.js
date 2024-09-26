import logo from './logo.svg';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const items = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];

  return (
    <div className="App">
      <h1>Search Example</h1>
      <SearchBar data={items} />
    </div>
  );
}

export default App;
