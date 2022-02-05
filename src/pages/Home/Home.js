import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../components/InputForm";
import { addData } from "../../firebase/db";
import { createFullUrl } from "../../util/url";
import * as S from "./style";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const urlCreateHandler = async (url) => {
    setLoading(true);
    const fullUrl = createFullUrl(url);
    const newUrl = {
      full: fullUrl,
      entries: 0,
    };
    const saveNewUrlData = async () => {
      const urlData = await addData(newUrl);
      setLoading(false);
      navigate(`/short-url/info/${urlData.id}`);
    };
    saveNewUrlData();
  };
  return (
    <S.HomePage>
      <h2>
        Short URL <span>in one click</span>
      </h2>
      <InputForm loading={loading} onSubmit={urlCreateHandler} />
    </S.HomePage>
  );
};

export default Home;
