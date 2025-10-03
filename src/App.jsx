
import './App.scss'
import { RouterProvider } from "react-router-dom";
import routes from './router/index.router';
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
