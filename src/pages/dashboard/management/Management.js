import React from "react";
import PropTypes from "prop-types";
import img_avatar from "@assets/img_avatar.png";
import modules from "./Management.module.scss";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Management(props) {
  return (
    <>
      <div style={{ marginLeft: 200 }}>
        Management

        <div className={modules.card} style={{borderStyle:"solid", margin:20}}>
          <img src={img_avatar} alt="Avatar" style={{ width: 100 }} />
          <div className={modules.container}>
            <h4>
              <b>Ogretmen Yonetimi [Admin Yetkisi]</b>
            </h4>
            <p>Panel</p>
            <p>Hizli Ogretmen Olustur</p>
          </div>
        </div>

        <div className={modules.card} style={{borderStyle:"solid", margin:20}}>
          <img src={img_avatar} alt="Avatar" style={{ width: 100 }} />
          <div className={modules.container}>
            <h4>
              <b>Ogrenci Yonetimi [Ogretmen Yetkisi]</b>
            </h4>
            <p>Panel</p>
            <p>Hizli Ogrenci Olustur</p>
          </div>
        </div>

        <div className={modules.card} style={{borderStyle:"solid", margin:20}}>
          <img src={img_avatar} alt="Avatar" style={{ width: 100 }} />
          <div className={modules.container}>
            <h4>
              <b>Dersler</b>
            </h4>
            <Link to={`/management/student-panel`}>
              <span>Panel</span>
            </Link>
            <p>Hizli Ders Olustur</p>
          </div>
        </div>
        
        <div className={modules.card} style={{borderStyle:"solid", margin:20}}>
          <img src={img_avatar} alt="Avatar" style={{ width: 100 }} />
          <div className={modules.container}>
            <h4>
              <b>Siniflar</b>
            </h4>
            <p>Panel</p>
            <p>Hizli Sinif Olustur</p>
          </div>
        </div>

      </div>
    </>
  );
}

Management.propTypes = {};

export default Management;
