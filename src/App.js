
import {Routes , Route, BrowserRouter} from "react-router-dom";
import { NormalRoutes } from "./routes/routes";


import './App.css';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            {NormalRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}/>
            ))}
          </Routes>
      </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
