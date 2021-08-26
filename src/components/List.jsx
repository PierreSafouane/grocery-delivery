import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from './Card';

const api = axios.create({ baseURL: "http://localhost:8080" });

export const List  = () =>{

  const [allProducts, setAllProducts] = useState([]);

    const fetchProducts = () => {
      const response = api.get("/api/produits").then((res) => {
        console.log("verification => "+res.data[0].type);
        setAllProducts(res.data);
      });
    };

    useEffect(() => {
      fetchProducts();
    }, []);


  return allProducts.map((product, index) => {
    return(
      <div className="col-sm">
        <div className="row">
          <Card key={index} produit={product} />
        </div>
      </div>
    );
  })
    
}

  export default List;