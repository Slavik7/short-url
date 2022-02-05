import React, { useState } from "react";

import * as S from "./style";
const InputForm = ({ onSubmit, loading, page = "create" }) => {
  const [text, setText] = useState("");

  const urlHandler = (e) => {
    e.preventDefault();
    if (text.length > 3) {
      onSubmit(text);
      setText("");
    }
  };
  return (
    <S.InputForm onSubmit={urlHandler}>
      <S.Input
        minLength={3}
        type="text"
        placeholder={page === "id" ? "enter Id or Short URL" : "enter URL here"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <S.Button type="submit" disabled={loading}>
        Submit
      </S.Button>
    </S.InputForm>
  );
};

export default InputForm;
