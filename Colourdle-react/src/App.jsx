import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App () {
  
  return (
    <div>
      Testkuhdfkjdfsh
      <br />
      <Link to={ `navbar` }>NavBar!</Link>
      <br />
      <Outlet />
    </div>
  )
}

export default App;