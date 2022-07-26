import { ProductCard } from './components/ProductCard'
import { Routes, Route } from 'react-router-dom'
import routes from './Routes/routes'

function App() {
  return (
    <div className="App">
      <Routes>{routes}</Routes>
    </div>
  )
}

export default App
