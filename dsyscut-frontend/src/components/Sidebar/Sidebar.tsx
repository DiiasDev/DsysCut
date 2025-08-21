import React, { useState } from "react";
import { FiHome, FiDollarSign, FiCalendar, FiUsers, FiBarChart2, FiSettings, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import ConfiguracoesModal from "../Configuracoes/ConfiguracoesModal";

export type SidebarTab = "home" | "financeiro" | "agendamentos" | "clientes" | "relatorios" | "configuracoes";

interface SidebarProps {
    open?: boolean;
    onToggle?: (open: boolean) => void;
    selectedTab?: SidebarTab;
    onSelectTab?: (tab: SidebarTab) => void;
}

export default function Sidebar({
    open: controlledOpen,
    onToggle,
    selectedTab: controlledTab,
    onSelectTab,
}: SidebarProps) {
    const [openState, setOpenState] = useState(true);
    const open = controlledOpen !== undefined ? controlledOpen : openState;
    const [selectedTabState, setSelectedTabState] = useState<SidebarTab>("home");
    const selectedTab = controlledTab !== undefined ? controlledTab : selectedTabState;
    const navigate = useNavigate();

    // Estado para hover do sidebar
    const [hovered, setHovered] = useState(false);
    // Estado para modal de configurações
    const [configModalOpen, setConfigModalOpen] = useState(false);

    // Tab config com rotas
    const tabs: { key: SidebarTab; label: string; icon: IconType; route: string }[] = [
        { key: "home", label: "Home", icon: FiHome, route: "/" },
        { key: "financeiro", label: "Financeiro", icon: FiDollarSign, route: "/financeiro" },
        { key: "agendamentos", label: "Agendamentos", icon: FiCalendar, route: "/agendamentos" },
        { key: "clientes", label: "Clientes", icon: FiUsers, route: "/clientes" },
        { key: "relatorios", label: "Relatórios", icon: FiBarChart2, route: "/relatorios" },
    ];

    // Tab click handler
    const handleTabClick = (tab: SidebarTab, route?: string) => {
        if (onSelectTab) onSelectTab(tab);
        else setSelectedTabState(tab);
        if (route) navigate(route); // Redireciona para a rota
    };

    // Toggle sidebar handler
    const handleToggle = () => {
        if (onToggle) onToggle(!open);
        else setOpenState(!open);
    };

    return (
        <>
            {/* Sidebar */}
            <aside
                className={`${open ? "w-64" : "w-20"} h-screen fixed left-0 top-0 z-40 transition-all duration-300 bg-white text-gray-900 flex flex-col justify-between shadow-lg`}
                style={{ transition: "width 0.3s" }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div>
                    {/* Toggle sidebar button - aparece só no hover */}
                    <div className="relative">
                        <button
                            className={`absolute -right-4 top-6 z-50 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow transition-opacity duration-200
                                ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            style={{ transition: "opacity 0.2s" }}
                            onClick={handleToggle}
                            aria-label={open ? "Fechar sidebar" : "Abrir sidebar"}
                        >
                            {open
                                ? React.createElement(FiChevronLeft as any, { size: 20 })
                                : React.createElement(FiChevronRight as any, { size: 20 })}
                        </button>
                        {/* Logo & Title */}
                        <div className="flex items-center gap-3 px-6 py-6">
                            <div className="w-10 h-10 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-lg flex items-center justify-center font-bold text-white text-lg">D</div>
                            {open && <span className="font-semibold text-xl">DsysCut</span>}
                        </div>
                    </div>
                    {/* Navigation */}
                    <nav className="px-2">
                        <ul className="flex flex-col gap-1">
                            {tabs.map(tab => {
                                const Icon = tab.icon as React.FC<{ size?: number }>;

                                const selected = selectedTab === tab.key;
                                return (
                                    <li
                                        key={tab.key}
                                        className={`flex items-center gap-3 py-3 cursor-pointer rounded-lg px-3 transition
                                            ${selected ? "bg-blue-100 text-blue-700 font-semibold border-l-4 border-blue-600" : "hover:bg-blue-50"}
                                            `}
                                        onClick={() => handleTabClick(tab.key, tab.route)}
                                    >
                                        {React.createElement(Icon, { size: 22 })}
                                        {open && <span>{tab.label}</span>}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                {/* Settings & User */}
                <div className="px-2 pb-6">
                    <button
                        className={`flex items-center gap-3 w-full py-3 px-3 rounded-lg transition mb-4
                            ${selectedTab === "configuracoes" ? "bg-blue-100 text-blue-700 font-semibold border-l-4 border-blue-600" : "bg-gray-100 hover:bg-blue-100"}
                        `}
                        onClick={() => setConfigModalOpen(true)}
                    >
                        {React.createElement(FiSettings as React.FC<{ size?: number }>, { size: 22 })}
                        {open && <span>Configurações</span>}
                    </button>
                    <div className="flex items-center gap-3">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
                        {open && (
                            <div>
                                <div className="font-semibold">Frankie Sullivan</div>
                                <div className="text-xs opacity-70">frankie@untitledui.com</div>
                            </div>
                        )}
                        <button className="ml-auto text-xl opacity-50">⋮</button>
                    </div>
                </div>
            </aside>
            {/* Modal de Configurações */}
            <ConfiguracoesModal open={configModalOpen} onClose={() => setConfigModalOpen(false)} />
        </>
    );
}