import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../../components/Details";
import { getDataById } from "../../firebase/db";
import * as S from "./style";
const UrlDetails = () => {
  const { id } = useParams();
  const [urlInfo, setUrlInfo] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const data = await getDataById(id);
      if (data) {
        setUrlInfo({ ...data });
      }
      setReady(true);
    };
    getData();
  }, []);
  return (
    <S.DetailsPage>
      <h2>Short URL Information</h2>
      {ready ? (
        urlInfo ? (
          <Details urlInfo={urlInfo} />
        ) : (
          <h3>URL not found</h3>
        )
      ) : (
        <h3>Loading...</h3>
      )}
    </S.DetailsPage>
  );
};

export default UrlDetails;
