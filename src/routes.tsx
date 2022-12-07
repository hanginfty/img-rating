import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { LoginPage } from './pages/Login'
import { UploadPage } from './pages/Upload'
import { RatingPage } from './pages/Rating'
import NotFoundPage from './pages/404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: 'rating', element: <RatingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'upload', element: <UploadPage /> },
    ],
  },
])

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <NotFoundPage />,
//   },
//   { path: 'login', element: <LoginPage /> },
//   { path: 'upload', element: <UploadPage /> },
// ])
