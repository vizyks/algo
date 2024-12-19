import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/home/home.tsx";
import SortingIndex from "./pages/sorting/sortingIndex.tsx";
import { SortingAlgorithmProvider } from "./context/Visualizer.tsx";
import { MainView } from "./pages/sorting/mainView.tsx";
import ReadMe from "./pages/sorting/readme.tsx";
import { Navigate } from "react-router-dom";

// CREATE ERROR HANDLER
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
          children: [
            { index: true, element: <Navigate to="readme" replace /> },
            {
              path: "readme",
              element: <ReadMe />,
            },
            {
              path: ":category/:algorithm",
              element: <MainView />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
