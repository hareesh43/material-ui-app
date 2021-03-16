
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes/>
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
