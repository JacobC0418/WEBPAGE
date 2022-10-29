import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Mainpage from "./MainPage";
import LearnPage from "./LearnPage";

function App() {
  return(
    <div>
      <Router>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/main" component={Mainpage}></Route>
        <Route exact path="/learn" component={LearnPage}></Route>
      </Router>
    </div>
  );
}

export default App