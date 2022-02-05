import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <Link to="/short-url">Short URL</Link>
      </S.Logo>
      <S.NavItems>
        <li>
          <Link to="/short-url">Create URL</Link>
        </li>
        <li>
          <Link to="/short-url/info">URL Information</Link>
        </li>
      </S.NavItems>
    </S.Header>
  );
};

export default Header;
