import Alerts from './components/Alerts/alerts'
import Grant from './components/grant/grant'
import Modal from './components/modal/modal'
import Filter from './components/filter/filter'
import Icons from './components/Icons/icons'
import Cards from './components/cards/cards'
import Navbar from './components/DesktopNav/navbar'
import FooterFunctionLight from './components/footer/footerLight'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FooterDark from './components/darkFooter/footerDark'
import Progress from './components/Progress/progress'

const router = createBrowserRouter([
  {
    path: "/modal",
    element: <Modal />,
    errorElement: <div>404 Not Found</div>
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
  {
    path: '/footerPageLight',
    element: <FooterFunctionLight/>
  },
  {
    path: '/footerPageDark',
    element: <FooterDark/>
  },
  {
    path: '/progress',
    element: <Progress/>
  },
])

function App() {  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
