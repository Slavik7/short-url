import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../../components/Details";
import { getDataById } from "../../firebase/db";
import * as S from "./style";
const UrlDetails = () => {
  const { id } = useParams();
  const [urlInfo, setUrlInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await getDataById(id);
      if (data) setUrlInfo({ ...data });
    };
    getData();
    setLoading(false);
  }, []);
  return (
    <S.DetailsPage>
      <h2>Short URL Information</h2>
      {!loading &&
        (urlInfo ? <Details urlInfo={urlInfo} /> : <h3>URL not found</h3>)}
    </S.DetailsPage>
  );
};

export default UrlDetails;
