import React, { Fragment } from "react";
import Header from "../src/components/Header";
import Auth from "../src/components/Auth";
import Counter from "./components/Counter";

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
