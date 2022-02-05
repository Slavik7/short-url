import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <Link to="/">Short URL</Link>
      </S.Logo>
      <S.NavItems>
        <li>
          <Link to="/">Create URL</Link>
        </li>
        <li>
          <Link to="/info">URL Information</Link>
        </li>
      </S.NavItems>
    </S.Header>
  );
};

export default Header;
