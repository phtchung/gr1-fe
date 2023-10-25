
import {Routes , Route, BrowserRouter} from "react-router-dom";
import {GuestRoutes, NormalRoutes, UserRoutes} from "./routes/routes";
import {QueryClient , QueryClientProvider} from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Auth, {ROLE} from "./hooks/auth";

function App() {
    const queryClient = new QueryClient()
  return (
      <QueryClientProvider client={queryClient}>
          <ToastContainer />
      <BrowserRouter>
          <Routes>
            {NormalRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}/>
            ))}

              {GuestRoutes.map((route, index) => (
                  <Route key={index} path={route.path}
                         element={route.element}/>
              ))}
              {UserRoutes.map((route, index) => (
                  <Route key={index} path={route.path}
                         element={<Auth role={ROLE.USER} path={"/login"}>{route.element}</Auth>}
                  />
              ))}
          </Routes>
      </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
