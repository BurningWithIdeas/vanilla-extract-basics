import React from "react";
import TemplateContainer from "./pages/store/templateContainer";
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Redirect from="/" to="/template" />
      <Route path="/template" component={TemplateContainer} />
    </>
  );
}

export default App;
