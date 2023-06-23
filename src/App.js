import React from 'react';
import CommonListing from './components/CommonListing';
import WithFetchDataHOC from './WithFetchDataHOC';

export default function App() {
  return (
    <div>
      <CommonListing.HocPost />
      <CommonListing.HocTodos />
    </div>
  );
}

const TestPosts = ({ data }) => {
  console.log('helllo', props);
  return <div>Hello</div>;
};

const HocTestPosts = WithFetchDataHOC(TestPosts, 'posts');
