import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../components/InputForm";
import * as S from "./style";
const UrlInfo = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const submitHandler = (text) => {
    setLoading(true);
    const textSplit = text.split("/");
    const id = textSplit[textSplit.length - 1];
    nav(`/info/${id}`);
    setLoading(false);
  };
  return (
    <S.UrlInfoPage>
      <h2>Short URL Information</h2>
      <InputForm onSubmit={submitHandler} loading={loading} page={"id"} />
    </S.UrlInfoPage>
  );
};

export default UrlInfo;
