// import React from 'react'

import ProductCards from "../reusables/ProductCards";

const Product = () => {
  return (
    <div>
        <div>Available Products</div>
        <div>
            {Array.from({length: 4}).map((_, index)=>(
                <div key={index}>
                    <ProductCards />
                </div>
            ))}
        </div>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <p>
                    To see more Products for different skin tones
                </p>
                <button>Click Here</button>
            </div>
        </div>
    </div>
  )
}

export default Product