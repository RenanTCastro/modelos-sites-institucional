import React from "react";

import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-contato-container">
                <h3>Contatos</h3>
                <p>Telefone: (51) 99999-9999</p>
                <p>E-mail: email@email.com</p>
            </div>
            <div className="footer-logo-container">
                <img className="footer-logo" src="https://nutriluanapetry.com.br/wp-content/uploads/2023/05/logo-1.webp" alt="Logo"/>
                <button className="footer-contact-button">ENTRAR EM CONTATO</button>
                <p>© 2021 - Todos os direitos reservados</p>
            </div>
            <div className="footer-endereco-container">
                <h3>Endereço</h3>
                <p>R. Pref. Leopoldo Freiberger,</p>
                <p>239, Centro, Biguaçu/SC</p>
            </div>
        </div>
    );
}
 