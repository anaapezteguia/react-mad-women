import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import GeneratorCard from "./GeneratorCard";

import Footer from "./Footer";

function App() {
  return (
    <body class="landing">
      <div className="page">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/GeneratorCard" component={GeneratorCard} />
        </Switch>

        <Footer />
      </div>
    </body>
  );
}

export default App;
