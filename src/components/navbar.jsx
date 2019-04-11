import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link To="/">Home</Link>
      </li>
      <li>
        <Link To="/products">Products</Link>
      </li>
      <li>
        <Link To="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link To="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
