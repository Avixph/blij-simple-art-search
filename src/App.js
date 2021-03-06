import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./componentScreens/Header";
import Home from "./componentScreens/Home";
import AboutUs from "./componentScreens/AboutUs";
import ArtMain from "./componentScreens/ArtMain";
import ArtDepartmentCollection from "./componentScreens/ArtDepartmentCollection";
import ArtDetail from "./componentScreens/ArtDetail";
import Footer from "./componentScreens/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/art" component={ArtMain} />
          <Route
            exact
            path="/art/departmentCollection"
            component={ArtDepartmentCollection}
          />
          <Route exact path="/art/artDetail" component={ArtDetail} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
