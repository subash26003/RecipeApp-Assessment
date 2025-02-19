import { Route , Routes } from 'react-router'
import Home from './pages/Home'
import { ToastContainer} from 'react-toastify';
import './App.css'
import Layout from './components/Layout'
import Recipe from './pages/Recipe'
import Favourites from './pages/Favourites'

function App() {
  
  return (
      <>
        <ToastContainer /> {/*Toast for Message Indication*/}
        <Routes>
          <Route path='/' element={<Layout />}> 
            <Route index element={<Home />} />
            <Route path='favourites' element={<Favourites />} />
            <Route path='recipe/:id' element={<Recipe />} />
          </Route>
        </Routes>
      </>
 
  )
}

export default App
