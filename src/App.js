import './App.css'
import { AboutMe } from './components/AboutMe'
import { Home } from './components/Home'
import { MyResume } from './components/MyResume'

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <MyResume />
    </div>
  )
}

export default App
