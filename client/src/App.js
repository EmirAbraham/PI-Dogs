import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Creator from "./components/Form/Form.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dogs/:id" component={Detail} />
        <Route exact path="/creator" component={Creator} />
        <Route exact path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
