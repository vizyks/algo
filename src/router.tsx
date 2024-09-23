import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/home/home.tsx";
import SortingIndex from "./pages/sorting/sortingIndex.tsx";
import { SortingAlgorithmProvider } from "./context/Visualizer.tsx";

function Router() {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sorting-algorithms",
          element: (
            <SortingAlgorithmProvider>
              <SortingIndex />
            </SortingAlgorithmProvider>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
