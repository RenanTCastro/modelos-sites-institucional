import React from "react";

import "./Home.css";
export default function Home() {

    return (
        <div className="home-container">
            <img className="home-background-image" src="https://blog.artmed.com.br/hubfs/Imported_Blog_Media/nutri%C3%A7%C3%A3o-e-sa%C3%BAde-mental.jpg" alt="home" />
            <div className="home-overlay-container">
                <div className="home-text-container">
                    <h1 className="home-title">Nutrição Personalizada</h1>
                    <p className="home-text"> 
                        Boas escolhas alimentares são a base de uma vida saudável e enérgica. 
                        Nesta jornada nutricional, vou guiá-lo na criação de hábitos alimentares 
                        positivos que nutrirão seu corpo e mente.
                    </p>
                    <button className="home-contact-button">ENTRAR EM CONTATO</button>
                </div>        
            </div>
        </div>
    );
}
 