import React, { useEffect, useState } from 'react'


export default function Card () {

 const [Productlist, setProductlist] = useState([])
 useEffect(()=>{
  fetch("./Productlist.JSON")
  .then(res=>res.json())
  .then(data=>setProductlist(data))
 },[])

  return (
    <div>
       <h1 className="text-center text-4xl m-10 text-green-500 font-bold">Our Products</h1>
       <div className="grid grid-cols-3 gap-5">
    
      {Productlist.map(product=> <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
           <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
        </figure>
        <div className="card-body">
         <h2 className="card-title">Shoes!!</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div className="card-actions justify-end">
         <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
      </div>)}
      </div>
    </div>
    )
    }
 
