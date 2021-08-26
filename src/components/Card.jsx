import React from "react";
import FormFileInput from "react-bootstrap/esm/FormFileInput";

export const Card = props =>{
  const { produit } = props
    return (
      <div className="col-sm">
        <div className="card">
          <img class=""
          src={produit.photoUrl}
          width="205"
          height="150"
          alt={produit.name}/>
              <div className="col-sm cptlz">
                <h4>{produit.name}</h4>
              </div>
              <div className="col-sm">
                <p>
                    {produit.price} €/Kg
                </p>
              </div>
              <button className="btn btn-info btn-sm">View Product</button>
        </div>
      </div>
    );
    };