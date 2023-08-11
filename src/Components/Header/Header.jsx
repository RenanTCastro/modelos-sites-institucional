import React from "react";

import "./Header.css";
// import Logo from "../../Assets/Logo.png";

export default function Header() {
    const Logo = "https://nutriluanapetry.com.br/wp-content/uploads/2023/05/08-1-1024x376.webp"
    return (
        <div className="header-container">
            <img src={Logo} alt="Logotipo" className="header-logo"/>
            <div className="header-nav-items">
                <p>Home</p>
                <p>Sobre</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <button className="header-contact-button">Contato</button>
            </div>
        </div>
    );
}
 