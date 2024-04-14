import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tab from "./page/tabs/tabs";


const router = createBrowserRouter([
  {
    path: "/tabs",
    element: <Tab />,
  },
]);

function App() {  
  return (
    <RouterProvider router={router}/>
  )
}

export default App;