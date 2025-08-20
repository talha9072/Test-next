"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
        activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
        activeSubMenu = (value) => value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
        activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
        activeSubMenus = (value) => value == activeMenus ? { display: "block" } : { display: "none" };

    return (
        <>
            <ul>
                <li><Link href="/">Home</Link></li>  
                
                <li className="menu-item-has-children">
                    <Link href="#">Services</Link>
                    <ul className="sub-menu" style={activeSubMenu("services")}>
                        {/* Digital Transformation */}
                        <li className="menu-group-heading">
                            <i className="fas fa-sync-alt main-clr" /> Digital Transformation
                        </li>
                        <li><Link href="/services/digital-strategy">Digital Strategy</Link></li>
                        <li><Link href="/services/microsoft-sustainability">Sustainability Manager</Link></li>
                        <li><Link href="/services/data-audit">Data Audit</Link></li>
                        <li><Link href="/services/corporate-trainings">Corporate Trainings</Link></li>
                        <li><Link href="/services/change-management-adoption">Change Management & Adoption</Link></li>
                        
                        

                        {/* Data & AI */}
                        <li className="menu-group-heading">
                            <i className="fas fa-robot main-clr" /> Data &amp; AI
                        </li>
                        <li><Link href="/services/power-bi">Power BI / Reporting Consulting</Link></li>
                        <li><Link href="/services/data-warehouse">Data Warehouse</Link></li>
                        <li><Link href="/services/artificial-intelligence-iot">Artificial Intelligence & IoT</Link></li>
                        <li><Link href="/services/azure">Azure Data Foundry</Link></li>

                        {/* Business Applications */}
                        <li className="menu-group-heading">
                            <i className="fas fa-briefcase main-clr" /> Business Applications
                        </li>
                        <li><Link href="/services/microsoft-dynamics-365">Microsoft Dynamics 365</Link></li>
                        <li><Link href="#">Microsoft 365 Deployment</Link></li>
                        <li><Link href="/services/microsoft-licensing">Microsoft Licensing</Link></li>

                        {/* Engagements */}
                        <li className="menu-group-heading">
                            <i className="fas fa-handshake main-clr" /> Software & Engineering
                        </li>
                        <li><Link href="#">Software Development</Link></li>
                        <li><Link href="/services/strategic-resourcing">Strategic Resourcing</Link></li>
                    </ul>
                    <a
                        className={`mean-expand ${activeIcon("services")}`}
                        onClick={() => active("services")}
                    />
                </li>

                <li className="menu-item-has-children">
                <Link href="#">Products</Link>
                <ul className="sub-menu" style={activeSubMenu("products")}>
                    {/* Products ISV */}
                    <li className="menu-group-heading">
                    <i className="fas fa-building main-clr" /> Products ISV
                    </li>
                    <li><Link href="/products/airports-turnaround-solution">Airport Turnaround Solution</Link></li>
                    <li><Link href="/products/nes-novum-entrance-system">NES (Novum Entrance System)</Link></li>
                    <li><Link href="/products/ocr-certification-directory">OCR Certification Directory</Link></li>
                    <li><Link href="/products/face-recognition-detection">Face Recognition & Detection</Link></li>
                    <li><Link href="/products/commodity-bidding-platform">Commodity Bidding Platform</Link></li>

                    {/* By Industry or Business Function */}
                    <li className="menu-group-heading">
                    <i className="fas fa-users main-clr" /> By Industry or Business Function
                    </li>
                    <li><Link href="/industries/pharmaceutical-industry">Healthcare & Pharma</Link></li>
                    <li><Link href="/industries/food-retail-distribution">Retail & Distribution</Link></li>
                    <li><Link href="/industries/agriculture">Manufacturing & Agriculture</Link></li>
                    <li><Link href="/industries/government">Government & Public Sector</Link></li>
                    <li><Link href="/industries/natural-resources">Oil & Gas / Energy</Link></li>
                    <li><Link href="/industries/aerospace-transportation">Transportation & Aviation</Link></li>
                </ul>
                <a
                    className={`mean-expand ${activeIcon("products")}`}
                    onClick={() => active("products")}
                />
                </li>
                <li className='menu-item-has-children'>
                    <Link href='#'>Resources</Link>
                    <ul className='sub-menu' style={activeSubMenu("project")}>
                        <li><Link href="/industries">Industries</Link></li>
                        <li><Link href="/case-studies">Case Studies</Link></li>
                        <li><Link href="/blog">Blogs/News</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("project")}`} onClick={() => active("project")}></a>
                </li>

                

                <li><Link href="/about-us">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default ResponsiveMenu;