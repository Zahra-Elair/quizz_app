import Header from "./components/Header";
import Body from "./components/Body";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/quizz_app/Result" element={<Result/>}/>
          <Route path="/quizz_app/Quiz" element={<Quiz/>}/>
          <Route path="/quizz_app/" element={<Body/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
