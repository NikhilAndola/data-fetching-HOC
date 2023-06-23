import React, { useState, useEffect } from 'react';
import WithFetchDataHOC from '../WithFetchDataHOC';

const CommponListing = ({ data, title }) => {
  return (
    <>
      <h2>{title?.toUpperCase()}</h2>
      {data?.map((item, i) => (
        <div key={i}>
          <p>{item?.title}</p>
        </div>
      ))}
    </>
  );
};

let HocPost = WithFetchDataHOC(CommponListing, 'posts');
let HocTodos = WithFetchDataHOC(CommponListing, 'todos');

export default {
  HocPost,
  HocTodos,
};
