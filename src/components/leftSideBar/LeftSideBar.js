import React from 'react'
import modules from './LeftSideBar.module.scss'

const LeftSideBar = () => {
    return (
            <div className={modules.sidebarmenu}>
                <ul>
                    <li><a href="#"><i className="fas fa-home"></i>Anasayfa</a></li>
                    <li><a href="#"><i className="fas fa-cog"></i>Hakkımda</a></li>
                    <li><a href="#"><i className="fas fa-id-card"></i>Ürünler</a></li>
                    <li><a href="#"><i className="fas fa-question-circle"></i>Galeri</a></li>
                    <li><a href="#"><i className="fas fa-folder-open"></i>İletişim</a></li>
                </ul>
            </div>
    )
}

export default LeftSideBar