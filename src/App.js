import Main from "./pages/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Single from "./pages/Single";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/:id' element={<Single/>} />
      </Routes>
  </Router>
  );
}

export default App;
