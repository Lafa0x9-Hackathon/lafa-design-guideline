import Alerts from './Alerts/alerts'
import Grant from './grant/grant'
import Modal from './modal/modal'
import Filter from './filter/filter'
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
  }
])

function App() {

    
  return (
    <RouterProvider router={router}/>
  )
}

export default App
