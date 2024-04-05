import React, { useEffect } from "react";
import "./Footer.css";
import { FaInstagram, FaGithub, FaLinkedinIn  } from "react-icons/fa";

function Footer(){
    return(
        <footer>
            <div className="container">
                <h4 id="custom-color"> © {"Axl Basilio"} {new Date().getFullYear()}</h4>
                <a id="custom-color" href="https://www.instagram.com/axl_basilio_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} className="social-icon"/>
                </a>
                <a id="custom-color" href="https://github.com/AxlBasilioa" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} className="social-icon"/>
                </a>
                <a id="custom-color" href="https://www.linkedin.com/in/baak99/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size={24} className="social-icon"/>
                </a>
            </div>

        </footer>
    );
}
export default Footer;