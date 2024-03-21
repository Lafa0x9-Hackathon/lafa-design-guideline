import './App.css'
import Grant from './modal/grant';
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
  }
])

function App() {

    
  return (
    <RouterProvider router={router}/>
  )
}

export default App
