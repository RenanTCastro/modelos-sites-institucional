import React from "react";

import "./About.css";

export default function About() {
    return (
        <div className="about-container">
            <div className="about-text-container">
                <h1>Sobre</h1>
                <p className="about-text">Minha missão como médico é atuar em benefício dos meus pacientes para promoção da saúde, 
                    prevenção e tratamento das doenças relativas a Endocrinologia e Metabologia e Nutrologia. 
                    A medicina é uma ciência dinâmica e em constante transformação que exige dos médicos 
                    dedicação na busca do seu aprimoramento e atualização.

                    No meu consultório, trabalho junto com o serviço de nutrição, com a proposta de primeiro 
                    acolher o paciente em sua necessidade para, posteriormente, através da educação e 
                    conscientização, promover o tratamento e mudanças necessárias a manutenção dos resultados.
                </p>
                <button className="about-contact-button">ENTRAR EM CONTATO</button>
            </div>
            <img src="https://nutriluanapetry.com.br/wp-content/uploads/2023/06/hero.webp" alt="Foto" className="about-img"/>
        </div>
    );
}
 