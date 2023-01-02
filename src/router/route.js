import { createBrowserRouter } from "react-router-dom";
import Form from "../components/form/form";
import Header from "../components/header/Header";
import NotFound from "../components/notFound/NotFound";

export const router = createBrowserRouter([
    {
      element: <Header />,
      children:[{
        path: '/',
        element: <h3>Home</h3>
      },
      {
        path: '/signup',
        element: <Form/>
      },
      {
        path: '*',
        element: <NotFound/>
      },
  ]
}
]);