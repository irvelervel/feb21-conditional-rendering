import './App.css'

import { List } from './components/List'

const arrayOfMovies = [{ name: 'Godzilla' }, { name: 'King Kong' }, { name: 'Vengeance' }]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List movies={arrayOfMovies} />
      </header>
    </div>
  )
}

export default App
