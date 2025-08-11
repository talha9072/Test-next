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
                        <li><Link href="/services/strategic-resourcing">Strategic Resourcing</Link></li>
                        <li><Link href="/services/change-management-adoption">Change Management & Adoption</Link></li>
                        <li><Link href="/services/corporate-trainings">Corporate Trainings</Link></li>
                        <li><Link href="/services/data-audit">Data Audit</Link></li>
                        <li><Link href="/services/microsoft-licensing">Microsoft Licensing</Link></li>
                        <li><Link href="/services/microsoft-sustainability">Sustainability Manager</Link></li>

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
                        <li><Link href="/services/dynamics-365">Microsoft Dynamics 365</Link></li>
                        <li><Link href="/services/modern-work">Modern Work (Microsoft 365/Copilot)</Link></li>

                        {/* Software & Engineering */}
                        <li className="menu-group-heading">
                            <i className="fas fa-code main-clr" /> Software &amp; Engineering
                        </li>
                        <li><Link href="/services/si-system-integration">SI (System integration)</Link></li>
                        <li><Link href="/services/azure-cloud-adoption">Azure (Cloud Adoption)</Link></li>
                        <li><Link href="/services/custom-application-dev">Custom Application Dev</Link></li>
                        <li><Link href="/services/copilot-studio-agents">Copilot Studio / Agents</Link></li>
                        <li><Link href="/services/automations">Automations</Link></li>

                        {/* Engagements */}
                        <li className="menu-group-heading">
                            <i className="fas fa-handshake main-clr" /> Engagements
                        </li>
                        <li><Link href="/services/consulting-advisory">Consulting &amp; Advisory Services</Link></li>
                        <li><Link href="/services/professional-services">Professional Services</Link></li>
                        <li><Link href="/services/managed-services">Managed Services</Link></li>
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
                    <li><Link href="/products/airport-turnaround-solution">Airport Turnaround Solution</Link></li>
                    <li><Link href="/products/nes-novum-entrance-system">NES (Novum Entrance System)</Link></li>
                    <li><Link href="/products/ocr-certification-directory">OCR Certification Directory</Link></li>
                    <li><Link href="/products/face-recognition-detection">Face Recognition & Detection</Link></li>
                    <li><Link href="/products/commodity-bidding-platform">Commodity Bidding Platform</Link></li>
                    <li><Link href="/products/d365-automations">D365 Automations</Link></li>
                    <li><Link href="/products/ess-employee-self-service">ESS - Employee Self Service</Link></li>

                    {/* By Industry or Business Function */}
                    <li className="menu-group-heading">
                    <i className="fas fa-users main-clr" /> By Industry or Business Function
                    </li>
                    <li><Link href="/products/healthcare-pharma">Healthcare & Pharma</Link></li>
                    <li><Link href="/products/retail-distribution">Retail & Distribution</Link></li>
                    <li><Link href="/products/manufacturing-agriculture">Manufacturing & Agriculture</Link></li>
                    <li><Link href="/products/government-public-sector">Government & Public Sector</Link></li>
                    <li><Link href="/products/oil-gas-energy">Oil & Gas / Energy</Link></li>
                    <li><Link href="/products/transportation-aviation">Transportation & Aviation</Link></li>
                </ul>
                <a
                    className={`mean-expand ${activeIcon("products")}`}
                    onClick={() => active("products")}
                />
                </li>
                <li className='menu-item-has-children'>
                    <Link href='#'>Resources</Link>
                    <ul className='sub-menu' style={activeSubMenu("project")}>
                        <li><Link href="/portfolio/2-columns">Industries</Link></li>
                        <li><Link href="/portfolio/3-columns">Case Studies</Link></li>
                        <li><Link href="/portfolio/gateway-integration">Blogs/News</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("project")}`} onClick={() => active("project")}></a>
                </li>

                

                <li><Link href="/about">About</Link></li>
            </ul>
        </>
    );
};

export default ResponsiveMenu;