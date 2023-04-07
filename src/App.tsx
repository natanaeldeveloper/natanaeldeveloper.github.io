import { RouterProvider } from 'react-router-dom'

import router from './Router'
import globalStyle from './styles/global'

function App() {
  return (
    <>
    {globalStyle()}
    <RouterProvider router={router} />
    </>
  )
}

export default App
