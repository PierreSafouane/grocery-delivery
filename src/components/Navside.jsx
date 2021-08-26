import React from "react"

const Navside = () =>{
    const links = ["Légumes","Fruits","Produits Frais","Epicerie","Boissons"]
    const loadCategory = i => {
      console.log(i)
    }
    return(
      <div className="col-sm">
        <ul className="ulStyle">
          {links.map((link, index) =>{
            return (<li key={index} onClick={() => loadCategory(index)}>{link}</li>)
          })}
        </ul>
     </div>
    )
  }

  export default Navside;