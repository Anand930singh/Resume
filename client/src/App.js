import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/projects" element={<Projects/>}></Route>
        </>
      </Routes>
    </Router>
    </>
  );
}

export default App;
