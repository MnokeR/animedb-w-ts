import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from "./routes/Root";
import ErrorBoundary from "./routes/ErrorBoundary";
import HomePage from "./routes/home/HomePage";
import AnimePage from "./routes/anime/AnimePage";
import SearchPage from "./routes/search/SearchPage";
import SearchResults from "./routes/search/components/SearchResults";

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
            element: <AnimePage />,
          },
          {
            path: "search",
            element: <SearchPage />,
            children: [
              {
                errorElement: <ErrorBoundary />,
                children: [
                  {
                    index: true,
                    element: <SearchResults />,
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
