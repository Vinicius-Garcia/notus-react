import React, { useEffect } from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import api from "api";


export default function Settings() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      console.log(response.data.data)
      setData(response.data.data)
    })
  }, [])
  return (
    <>
      <div className="flex flex-wrap mt-4">

        <div className="w-full mb-12 px-4">
          <CardTable color="dark" name="Lista de Estoque" data={data}/>
        </div>
      </div>
    </>
  );
}
