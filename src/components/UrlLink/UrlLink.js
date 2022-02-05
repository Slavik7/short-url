import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById, updateEntries } from "../../firebase/db";
import * as S from "./style";
const UrlLink = ({ data }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await getDataById(id);
      if (data) {
        updateEntries(id, data.entries);
        window.location.href = data.full;
      }
    };
    getData();
    setLoading(false);
  }, []);
  return <S.UrlLink>{!loading && <h3>URL not found</h3>}</S.UrlLink>;
};

export default UrlLink;
