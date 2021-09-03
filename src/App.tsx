import "./common/styles/main.scss";
import NewsFeed from "./modules/feed/views/news-feed/news-feed";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export function App() {
  return (
    <section>
      Hello
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/news-feed" />
          </Route>
          <Route path="/news-feed">
            <NewsFeed></NewsFeed>
          </Route>
        </Switch>
      </Router>
    </section>
  );
}
