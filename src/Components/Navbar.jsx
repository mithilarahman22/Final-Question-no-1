import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="navbar bg-green-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Products</a></li>
        <li><a>Contacts</a></li>
        <li><a>Settings</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Shoes</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary><Link to="/Home">Homeb</Link></summary>
        </details>
      </li>
      <li>
        <details>
          <summary><Link to="/Product">Product</Link></summary>
        </details>
      </li>
      <li>
        <details>
          <summary><Link to='/Contact'>Contact</Link></summary>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gray-800 text-white">Settings</a>
  </div>
</div>
  )
}

export default Navbar
