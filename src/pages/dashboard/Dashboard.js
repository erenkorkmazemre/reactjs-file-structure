import LeftSideBar from "@components/leftSideBar";
import React from "react";

function Dashboard() {
  return (
    <>
      <div style={{marginLeft:200}}>Dashboard</div>
      <ul style={{ marginLeft: 200 }}>
        <li>
          <div>Tum Ogrencileri Gor</div>
        </li>
        <li>
          <div>Tum Ogretmenleri Gor</div>
        </li>
        <li>
          <div>Yeni Ogrenci Olustur</div>
        </li>
        <li>
          <div>Yeni Ogretmen Olustur</div>
        </li>
      </ul>
    </>
  );
}

export default Dashboard;