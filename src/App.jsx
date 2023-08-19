import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Scroll from "./scroll to top/Scroll";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      <Scroll />
    </React.Fragment>
  );
}

export default App;
