import React, { useState, useEffect } from 'react';

export default function WithFetchDataHOC(SingleComp, fetchType) {
  return function Hoc() {
    const [data, setData] = useState();

    useEffect(() => {
      const fetchPost = async () => {
        let todos = await fetch(
          `https://jsonplaceholder.typicode.com/${fetchType}`
        );
        let response = await todos.json();
        let finalResData = response.slice(0, 10);
        setData(finalResData);
      };
      fetchPost();
    }, []);
    return <SingleComp data={data} title={fetchType} />;
  };
}
