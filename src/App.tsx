import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from "./routes/Root";
import ErrorBoundary from "./routes/ErrorBoundary";
import HomePage from "./routes/home/HomePage";
import AnimePage from "./routes/anime/AnimePage";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        errorElement: <ErrorBoundary />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: ":type/:animeId",
            element: "",
            children: [
              {
                errorElement: <ErrorBoundary />,
                children: [
                  {
                    index: true,
                    element: <AnimePage />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
