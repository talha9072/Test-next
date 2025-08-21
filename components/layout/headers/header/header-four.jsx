"use client";
import Link from 'next/link';
import MainMenu from '../header-menu';
import { useEffect, useState } from 'react';
import logo1 from "../../../../public/assets/img/Novum-logo-01.png";
import logo2 from "../../../../public/assets/img/Novum-logo-03.png";
import MobileMenuPopup from '../mobile-menu/menu-area';


const HeaderFour = ({variant}) => {
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);
    return (
        <>
        
        <div className={`header__area ${ variant ? variant : "" } header__sticky four ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
        <div className="custom__container">
            <div className="header__area-menubar">
                <div className="header__area-menubar-left">
                    <div className="header__area-menubar-left-logo">
                        <Link href="/"><img src={logo1.src} alt="logo" /></Link>
                    </div>
                </div>
				<div className="header__area-menubar-center">
                    <div className="header__area-menubar-center-menu">
                        <MainMenu />
                    </div>
				</div>
                <div className="header__area-menubar-right">
                    <div className="header__area-menubar-right-box">
						<div className="header__area-menubar-right-box-btn">
							<Link className="btn-two" href="/contact">Contact Us</Link>
						</div>
                        
                        <div className="header__area-menubar-right-responsive-menu menu__bar">
                            <i className="bi bi-grid-3x3-gap" onClick={() => setMenuSidebar(true)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo2} />
        </>
    );
};

export default HeaderFour;