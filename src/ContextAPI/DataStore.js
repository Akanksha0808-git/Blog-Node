import React, { createContext, useState, useEffect } from 'react'

import axios from "axios";
export const Store = createContext();
const url = "https://akanksharma-node-blog.onrender.com/"
function DataStore(props) {
  const [data, setData] = useState()
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        // console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log("Data fetchiing is Showing Error: " + err);
      }
    };
    getData();
  }, []);

  return (
    <>
      {data && (
      <Store.Provider value={[data, setData]}>
        {props.children}
      </Store.Provider>)}

    </>
  )
}

export default DataStore
