import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter([]);

function App() {
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />;
  </QueryClientProvider>;
}

export default App;
