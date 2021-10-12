import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import "./App.css";
import { HomePage, LogInPage, NavBar,DetailPage } from "./Components";
import { getMoviesList } from "./features/moviesSlice";

function App() {
  const userSelector = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/login">
          {!userSelector ? <LogInPage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          {userSelector ? <HomePage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/detail/:id">
          {userSelector ? <DetailPage /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
