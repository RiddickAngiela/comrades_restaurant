import React from 'react';
import {useNavigate} from "react-router-dom"

function Menu() {
  let navigate =useNavigate()

  return (
    <div className='flex flex-col'>
      
       <h1 className='ml-12'>MENU ......................</h1>
      <h1 className='ml-12 mt-8'>CHECK OUR TASTY MENU</h1>

      <div className='mx-8 mt-12'>
      <ul className="flex flex-row mx-8">
        <li className='mx-4'>All</li>
        <li className='mx-4'>Breakfast</li>
        <li className='mx-4'>Lunch</li>
        <li className='mx-4'>Dinner</li>
      </ul>
      </div>
      
    <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12 h-full flex flex-col mx-24">
    <table className="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th className="border border-slate-300">Image</th>
      <th className="border border-slate-300">Name</th>
      <th className="border border-slate-300">Description</th>
      <th className="border border-slate-300">Price (Kshs)</th>
      <th className="border border-slate-300">Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 ">Image</td>
      <td className="border border-slate-300">Chips Chicken</td>
      <td className="border border-slate-300 ">Kienyeji chicken + Local Potatoes</td>
      <td className="border border-slate-300">800</td>
      <td className="border border-slate-300"><a className="text-blue-600" onClick={()=>{ navigate("/menuitem")}}>Review</a></td>
    </tr>
  </tbody>
</table>
</div>
</div>
  );
}

export default Menu;
