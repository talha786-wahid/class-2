import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import store from "./store";
import Landing from "./container/ReduxPractice/Landing";
import CheckoutProduct from "./container/ReduxPractice/CheckoutProduct";
import PostForm from "./container/ReduxPractice/Redux/components/PostForm";
function App() {
  return (
    <div className="App">
      {/* <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/checkoutProduct" component={CheckoutProduct} />
          </Switch>
        </div>
      </Router> */}
      <PostForm />
    </div>
  );
}

export default App;
