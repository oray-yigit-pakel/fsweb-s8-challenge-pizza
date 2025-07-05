import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Anasayfa from "./components/Anasayfa.jsx";
import SiparisOnayi from "./components/SiparisOnayi.jsx";
import Footer from "./miniComponents/Footer.jsx";

import SiparisForm from "./components/SiparisForm.jsx";

import BackToTop from "./scrollToTop.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Switch>
        <Route exact path="/anasayfa" component={Anasayfa} />
        <Route exact path="/siparisform" component={SiparisForm} />
        <Route exact path="/siparisonayi" component={SiparisOnayi} />
      </Switch>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
