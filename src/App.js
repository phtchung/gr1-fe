
import {Routes , Route, BrowserRouter} from "react-router-dom";
import { NormalRoutes } from "./routes/routes";
import {QueryClient , QueryClientProvider} from "@tanstack/react-query";

import './App.css';

function App() {
    const queryClient = new QueryClient()
  return (
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routes>
            {NormalRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}/>
            ))}
          </Routes>
      </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
