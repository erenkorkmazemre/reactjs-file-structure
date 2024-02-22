import React from "react";
import modules from "./LeftSideBar.module.scss";
import { Link } from "react-router-dom";
const LeftSideBar = () => {
  return (
    <div className={modules.sidebarmenu}>
      <nav>
        <ul>
          <li>
            <Link to={`/home`}>
              <span>Anasayfa</span>
            </Link>
          </li>
          <li>
            <Link to={`/management`}>
              <span>Management</span>
            </Link>
          </li>
          <li>
            <Link to={`/about-me`}>
              <span>Hakkımda</span>
            </Link>
          </li>
          <li>
            <Link to={`/products`}>
              <span>Urunler</span>
            </Link>
          </li>
          <li>
            <Link to={`/galeria`}>
              <span>Galeri</span>
            </Link>
          </li>
          <li>
            <Link to={`/contact`}>
              <span>Iletisim</span>
            </Link>
          </li>
          <li>
            <Link to={`/login`}>
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSideBar;
