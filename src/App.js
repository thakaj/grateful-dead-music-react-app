import './App.css';
import Songs from './components/Songs'
import FormSongs from './components/FormSongs'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Songs />
        <FormSongs />
      </header>
    </div>
  );
}

export default App;
