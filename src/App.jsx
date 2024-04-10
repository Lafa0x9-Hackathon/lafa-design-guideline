import Accordion from "./page/accordion/Accordion"
import Typography from "./page/typography/Typography"
import './app.scss'
import Card from "./page/card/Card"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/card",
    element: <Card />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/Accordian",
    element: <Accordion />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/Typography",
    element: <Typography />,
    errorElement: <div>404 Not Found</div>
  },
]);

function App() {
  return (
     <RouterProvider router={router}/>
  )
}

export default App
