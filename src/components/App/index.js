import React from "react";
import Navbar from "./../Navbar/index";
import Main from "./../Main";
import Footer from "./../Footer";

import "./styles.scss";


class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Main />
      </>
    );
  }
}
export default App;
