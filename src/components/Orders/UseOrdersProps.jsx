import { useState } from "react";

const UseOrdersProps = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [inProgressProducts, setInProgressProducts] = useState([]);
  const [deliveringProducts, setDeliveringProducts] = useState([]);
  const [readyProducts, setReadyProducts] = useState([]);

  return {
    newProducts,
    setNewProducts,
    inProgressProducts,
    setInProgressProducts,
    deliveringProducts,
    setDeliveringProducts,
    readyProducts,
    setReadyProducts,
  };
};

export default UseOrdersProps;
