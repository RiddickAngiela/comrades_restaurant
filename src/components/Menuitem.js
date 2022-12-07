import React from 'react';
import {useNavigate} from "react-router-dom"

function Menuitem() {
    let navigate =useNavigate()
  return (
    <div>
      <img src=""/>
      <h2>title</h2>
      <p>Description</p>
      <p>price</p>
      <h1>Reviews</h1>
      <p>All reviews</p>
      <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12  flex flex-col mx-64">
      <div className="mb-4 px-8 pt-12">
      <label className="block text-grey-darker text-sm font-serif font-bold mb-2" for="review">
        Post a Review
      </label>
      <input type="textarea" className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username"  required></input>
      </div>
      <div className="flex items-center justify-between px-8">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
        Post
      </button>
      </div>
      </div>

      <div className="flex items-center justify-between px-8">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={()=>{ navigate("/menu")}}>
        Back to Menu
      </button>
      </div>
    </div>
  );
}

export default Menuitem;
