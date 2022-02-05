import React from "react";
import * as S from "./style";
const Details = ({ urlInfo }) => {
  const shortUrl =
    window.location.protocol + "//" + window.location.host + "/#/" + urlInfo.id;
  return (
    <S.Details>
      <p>
        <span>Short URL:</span>
        {shortUrl}
        <S.Copy onClick={() => navigator.clipboard.writeText(shortUrl)}>
          copy
        </S.Copy>
      </p>
      <p>
        <span>Full URL:</span>
        {urlInfo.full}
      </p>
      <p>
        <span>Entries:</span>
        {urlInfo.entries}
      </p>
    </S.Details>
  );
};

export default Details;
