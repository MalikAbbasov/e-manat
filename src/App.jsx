import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "./Layout/Mainlayout";
import Home from "./pages/Home";
import { Suspense, useState } from "react";
import LocaleContext from "./context/languageContext/LocaleContext";
import i18n from "./i18n";


function Loading() {
  return <>Loading...</>;
}

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <div className="App">
      <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainlayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
      </LocaleContext.Provider>
    </div>
  );
}

export default App;
