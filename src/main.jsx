import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import BookCategoryPage from './components/BookCategoryPage.jsx'
import BookDetailPage from './components/BookDetailPage.jsx'
import AddBook from './components/AddBook.jsx'
import ErrorPage from './components/ErrorPage.jsx'
// here we are using routing provided by react router dom
const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/browseBooks",
        element: <BrowseBooks />
      },
      {
        path: "/addBooks",
        element: <AddBook />
      },
      {
        path: "/book/category/:category",
        element: <BookCategoryPage />
      },
      {
        // :id here : use for dynamic routing 
        path: "/book/detail/:id",
        element: <BookDetailPage />
      }


    ],
    //  error page to show user when a page is not exist 
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
