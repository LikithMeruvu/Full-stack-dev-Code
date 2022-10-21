import Home from "./components/home"
import About from "./components/about"
import Nav from "./components/navbar"
import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
    </>
  );
}

export default App;
