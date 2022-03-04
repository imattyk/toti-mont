import "./App.scss";
import React, { Component } from "react";
import { Content } from "carbon-components-react";
import HeaderBar from "./components/HeaderBar";
import { Route, Routes, Switch } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import About from "./content/About";

class App extends Component {
  render() {
    return (
      <>
        <HeaderBar />
        <Content>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Content>
      </>
    );
  }
}

export default App;
