import React from "react";

import "./Services.css";

export default function Services() {
    
    return (
        <div className="services-container">
            <h1 className="services-title">Minhas especialidades</h1>
            <div className="services-cards-container">
                <button className="services-card-button"> - </button>
                <div className="services-card">
                    <img className="services-card-image" src="https://www.florence.edu.br/blog/wp-content/uploads/2021/08/Florence-dia-do-nutricionista.jpg" alt="Foto"/>
                    <h4>Endocrinologia e Metabologia</h4>
                    <p>Endocrinologia é a especialidade médica que estuda as ordens do sistema endócrino e suas secreções específicas,
                        chamadas de secreções fisiológicas.</p>
                </div>
                <div className="services-card">
                    <img className="services-card-image" src="https://www.florence.edu.br/blog/wp-content/uploads/2021/08/Florence-dia-do-nutricionista.jpg" alt="Foto"/>
                    <h4>Endocrinologia e Metabologia</h4>
                    <p>Endocrinologia é a especialidade médica que estuda as ordens do sistema endócrino e suas secreções específicas,
                        chamadas de secreções fisiológicas.</p>
                </div>
                <div className="services-card">
                    <img className="services-card-image" src="https://www.florence.edu.br/blog/wp-content/uploads/2021/08/Florence-dia-do-nutricionista.jpg" alt="Foto"/>
                    <h4>Endocrinologia e Metabologia</h4>
                    <p>Endocrinologia é a especialidade médica que estuda as ordens do sistema endócrino e suas secreções específicas,
                        chamadas de secreções fisiológicas.</p>
                </div>
                <button className="services-card-button">+</button>
            </div>
            <button className="services-contact-button">ENTRAR EM CONTATO</button>
        </div>
    );
}
 