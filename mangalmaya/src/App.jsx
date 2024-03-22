import Alerts from './Alerts/alerts'
import Grant from './grant/grant'
import Modal from './modal/modal'
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
  }
])

function App() {

    
  return (
    <RouterProvider router={router}/>
  )
}

export default App
