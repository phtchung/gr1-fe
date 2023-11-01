
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { NormalRoutes, UserRoutes} from "./routes/routes";
import {QueryClient , QueryClientProvider} from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth, {CheckLogin} from "./pages/context/RequireAuth";
import './App.css';
import * as Pages from "./pages";

function App() {
    const queryClient = new QueryClient()


  return (
      <QueryClientProvider client={queryClient}>
          <ToastContainer />
      <BrowserRouter>
          <Routes>
            {NormalRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={<CheckLogin>{route.element}</CheckLogin>}/>
            ))}

              {UserRoutes.map((route, index) => (
                  <Route key={index} path={route.path}  element={<RequireAuth>{route.element}</RequireAuth>}>
                  </Route>
              ))}
                      {/*<Route path='/overview' element={<RequireAuth><Pages.Overview/></RequireAuth>}/>*/}
                      {/*<Route path='/search' element={<RequireAuth><Pages.Search/></RequireAuth>} />*/}
                      {/*<Route path='/profile' element={<RequireAuth><Pages.Profile/></RequireAuth>} />*/}
                      {/*<Route path='/detail/:id' element={<RequireAuth><Pages.Detail/></RequireAuth>} />*/}
                      {/*<Route path='/tasklist' element={<RequireAuth><Pages.TaskList/></RequireAuth>} />*/}

          </Routes>
      </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
