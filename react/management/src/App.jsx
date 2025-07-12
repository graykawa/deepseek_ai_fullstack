import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './views/login/index'
import MainLayout from './views/layout'
import Home from './views/home'
import Public from './views/public'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>

          <Route path='/layout' element={<MainLayout/>}>
            <Route path='' element={<Home/>}></Route>
            <Route path='public' element={<Public/>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App