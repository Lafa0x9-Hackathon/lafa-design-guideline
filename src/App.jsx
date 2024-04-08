import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Alerts from './components/Alerts/alerts'
import Grant from './components/grant/grant'
import Modal from './components/modal/modal'
import Filter from './components/filter/filter'
import Icons from './components/Icons/icons'
import Cards from './components/cards/cards'
import Navbar from './components/DesktopNav/navbar'
import FooterFunctionLight from './components/footer/footerLight'
import FooterDark from './components/darkFooter/footerDark'
import Progress from './components/Progress/progress'
import Accordion from './components/accordion/Accordion'


const router = createBrowserRouter([
  {
    path: "/modal",
    element: <Modal />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/grant",
    element: <Grant />,
    errorElement: <div>404 Not Found</div>
    
  },
  {
    path: "/alert",
    element: <Alerts />,
    errorElement: <div>404 Not Found</div>
    
  },
  {
    path: "/filter",
    element: <Filter />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/icons",
    element: <Icons />,
    errorElement: <div>404 Not Found</div>
    
  },
  {
    path: "/cards",
    element: <Cards />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/nav",
    element: <Navbar />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/footerPageLight',
    element: <FooterFunctionLight />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/footerPageDark',
    element: <FooterDark />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/progress',
    element: <Progress/>
  },
  {
    path: '/accordion',
    element: <Accordion/>
  }
])

function App() {  
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
