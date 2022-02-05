import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import UrlLink from "./components/UrlLink";
import Home from "./pages/Home";
import UrlDetails from "./pages/UrlDetails";
import UrlInfoSearch from "./pages/UrlInfoSearch";
import { getData } from "./storage";
import GlobalStyle from "./style/GlobalStyle";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const storageData = getData();
    setData(storageData);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setData={setData} data={data} />}
        />
        <Route exact path="/:id" element={<UrlLink data={data} />} />
        <Route exact path="/info/:id" element={<UrlDetails />} />
        <Route exact path="/info" element={<UrlInfoSearch />} />
      </Routes>
    </div>
  );
}

export default App;
