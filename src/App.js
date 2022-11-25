// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Routing from "./Routing";

function Lolo (){
  let soso = "karim"
  return(
      <>
          <br />
          <div>
              <p>{soso}</p>
          </div>
      </>
  ); 
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />}/>
            <Route path="route" element={<Routing />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Lolo />
    </>
  );
}

function Home(){
  return (
    <>
      <h2>Hello start !</h2>
      <ul>
        <li><a href="route">Route in react</a></li>
      </ul>
    </>
  );
}


export default App;