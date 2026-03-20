import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'

const router = createBrowserRouter([
  {
    path: '/mmood-intitutional-site/',
    element: <HomeLayout />
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
