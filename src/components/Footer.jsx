import React from "react";
import logo from '../images/logo.png'

export default function Footer(){
    return(
            <footer className="footer">
                <div className="footer-list">
                        <h3 className="footer_list_item1">Rólunk</h3>
                        <h3 className="footer_list_item4">Lorem Ipsum</h3>
                        <h3 className="footer_list_item3">GYIK</h3>
                        <h3 className="footer_list_item2">ÁFSZ</h3>
                </div>
                <hr className="footer-line"></hr>
                <img src={logo} alt="" className="footer-logo"></img>
            </footer>
    )
}