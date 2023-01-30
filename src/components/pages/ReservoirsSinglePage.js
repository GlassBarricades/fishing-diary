import { Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";

const ReservoirsSinglePage = () => {
  const [reservoir, setReservoir] = useState({});
  const { uuid } = useParams();

  useEffect(() => {
    onValue(ref(db, `/reservoirs/${uuid}`), (snapshot) => {
      setReservoir({});
      const data = snapshot.val();
      if (data !== null) {
        setReservoir(() => data);
      }
    });
  }, [uuid]);

  return (
    <>
      <Title>{reservoir.name}</Title>
    </>
  );
};
export default ReservoirsSinglePage;
