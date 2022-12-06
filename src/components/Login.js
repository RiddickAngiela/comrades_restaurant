import React from 'react';
import {useNavigate} from "react-router-dom"


function Login() {
  let navigate =useNavigate()

  const User={

  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col mx-8">
      <div className="mb-4 px-8">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text"></input>
      </div>
      <div className="mb-6 px-8">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password"></input>
      </div>
      <div className="flex items-center justify-between px-8">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-600" onClick={()=>{ navigate("/register")}}>
        No account? Sign Up
      </a>
      </div>
    </div>
  );
}

export default Login;
