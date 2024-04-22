import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tab from "./page/tabs/tabs";
import Accordion from "./page/accordion/Accordion"
import Typography from "./page/typography/Typography"
import './app.scss'
import Card from "./page/card/Card"
import './App.css'
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
import FirstPage from "./components/Form/FirstPage.jsx";
import Form from "./components/Form/Form.jsx";
import Shadow from "./components/BoxShadow/Shadow.jsx";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb.jsx";
import Page1 from "./components/Breadcrumb/Page1.jsx";
import Page2 from "./components/Breadcrumb/Page2.jsx";
import Page3 from "./components/Breadcrumb/Page3.jsx";
import ButtonPage from './page/button/ButtonPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/tabs",
    element: <Tab />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/form",
    element: <Form />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/card",
    element: <Card />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/Typography",
    element: <Typography />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/shadow",
    element: <Shadow />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/breadcrumb",
    element: <Breadcrumb />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/page",
    element: <Page1 />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/page2",
    element: <Page2 />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/page3",
    element: <Page3 />,
    errorElement: <div>404 Not Found</div>
  },
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
  },
  {
    path: "/buttons",
    element: <ButtonPage />
  }
])

function App() {  
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
