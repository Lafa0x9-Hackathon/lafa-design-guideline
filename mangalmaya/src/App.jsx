import Alerts from './components/Alerts/alerts'
import Grant from './components/grant/grant'
import Modal from './components/modal/modal'
import Filter from './components/filter/filter'
import Icons from './components/Icons/icons'
import Cards from './components/cards/cards'
import Navbar from './components/DesktopNav/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/modal",
    element: <Modal/>,
  },
  {
    path: "/grant",
    element: <Grant/>
  },
  {
    path: "/alert",
    element: <Alerts/>
  },
  {
    path: "/filter",
    element: <Filter/>
  },
  {
    path: "/icons",
    element: <Icons/>
  },
  {
    path: "/cards",
    element: <Cards/>
  },
  {
    path: "/nav",
    element: <Navbar/>
  },
])

function App() {

    
  return (
    <RouterProvider router={router}/>
  )
}

export default App
