import React from 'react';

const Board = () => {
  const [resppost, setRespPost] = React.useState(0);

  (async function getData() {
    setRespPost(await Promise.resolve(30));
  })();

  return <h1>Board {resppost} </h1>;
};

export default Board;
