import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from '../config';

export default function SingleView() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const fetchProductById = async (id) => {
    const product = await fetch(`${BASE_URL}/products/${id}`)
      .then((res) => res.json());
    return product;
  };

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);

  if (!product) return (<div className="loading-spinner">Loading...</div>);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
