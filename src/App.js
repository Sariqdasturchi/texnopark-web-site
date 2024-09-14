import Course from "./compnent/course/course";
import Home from "./compnent/home/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";



function App() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course",
        element: <Course />
      }
    ]);

    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }

  export default App;
