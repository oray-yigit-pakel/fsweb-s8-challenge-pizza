import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Anasayfa from "./components/Anasayfa.jsx";
import SiparisOnayi from "./components/SiparisOnayi.jsx";
import Footer from "./miniComponents/Footer.jsx";
import SiparisVer from "./miniComponents/SiparisVer.jsx";
import SiparisForm from "./components/SiparisForm.jsx";
import NavigationMenu from "./miniComponents/navigationMenu.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Switch>
        <Route exact path="/anasayfa" component={Anasayfa} />
        <Route exact path="/siparisform" component={SiparisForm} />
        <Route exact path="/siparisonayi" component={SiparisOnayi} />
        <Route exact path="/foot" component={Footer} />
        <Route exact path="/siparisver" component={SiparisVer} />
        <Route exact path="/navigasyon" component={NavigationMenu} />
      </Switch>
    </>
  );
}

export default App;
