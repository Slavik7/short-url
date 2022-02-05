import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import UrlLink from "./components/UrlLink";
import Home from "./pages/Home";
import UrlDetails from "./pages/UrlDetails";
import UrlInfoSearch from "./pages/UrlInfoSearch";
import GlobalStyle from "./style/GlobalStyle";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/short-url" element={<Home />} />
        <Route exact path="/short-url/:id" element={<UrlLink />} />
        <Route exact path="/short-url/info/:id" element={<UrlDetails />} />
        <Route exact path="/short-url/info" element={<UrlInfoSearch />} />
      </Routes>
    </div>
  );
}

export default App;
