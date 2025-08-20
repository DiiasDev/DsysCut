import React, { useState } from "react";
import { FiHome, FiDollarSign, FiCalendar, FiUsers, FiBarChart2, FiSettings } from "react-icons/fi";

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

    // Cast icons to React.ElementType
    const HomeIcon = FiHome as React.ElementType;
    const FinanceIcon = FiDollarSign as React.ElementType;
    const CalendarIcon = FiCalendar as React.ElementType;
    const ClientsIcon = FiUsers as React.ElementType;
    const ReportsIcon = FiBarChart2 as React.ElementType;
    const SettingsIcon = FiSettings as React.ElementType;

    // Tab config
    const tabs: { key: SidebarTab; label: string; icon: React.ElementType }[] = [
        { key: "home", label: "Home", icon: HomeIcon },
        { key: "financeiro", label: "Financeiro", icon: FinanceIcon },
        { key: "agendamentos", label: "Agendamentos", icon: CalendarIcon },
        { key: "clientes", label: "Clientes", icon: ClientsIcon },
        { key: "relatorios", label: "Relatórios", icon: ReportsIcon },
    ];

    // Tab click handler
    const handleTabClick = (tab: SidebarTab) => {
        if (onSelectTab) onSelectTab(tab);
        else setSelectedTabState(tab);
    };

    // Toggle sidebar handler
    const handleToggle = () => {
        if (onToggle) onToggle(!open);
        else setOpenState(!open);
    };

    return (
        <>
            {/* Toggle sidebar button */}
            <button
                className={`fixed top-4 left-0 z-50 flex items-center justify-center w-10 h-10 rounded-r-lg bg-blue-600 text-white shadow-lg transition-all duration-300
                    ${open ? "ml-64" : "ml-20"}`}
                style={{ transition: "margin-left 0.3s" }}
                onClick={handleToggle}
                aria-label={open ? "Fechar sidebar" : "Abrir sidebar"}
            >
                <span className="text-xl">{open ? "⏴" : "⏵"}</span>
            </button>
            {/* Sidebar */}
            <aside className={`${open ? "w-64" : "w-20"} h-screen fixed left-0 top-0 z-40 transition-all duration-300 bg-white text-gray-900 flex flex-col justify-between shadow-lg`}
                style={{ transition: "width 0.3s" }}
            >
                <div>
                    {/* Logo & Title */}
                    <div className="flex items-center gap-3 px-6 py-6">
                        <div className="w-10 h-10 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-lg flex items-center justify-center font-bold text-white text-lg">D</div>
                        {open && <span className="font-semibold text-xl">DsysCut</span>}
                    </div>
                    {/* Navigation */}
                    <nav className="px-2">
                        <ul className="flex flex-col gap-1">
                            {tabs.map(tab => {
                                const Icon = tab.icon;
                                const selected = selectedTab === tab.key;
                                return (
                                    <li
                                        key={tab.key}
                                        className={`flex items-center gap-3 py-3 cursor-pointer rounded-lg px-3 transition
                                            ${selected ? "bg-blue-100 text-blue-700 font-semibold border-l-4 border-blue-600" : "hover:bg-blue-50"}
                                            `}
                                        onClick={() => handleTabClick(tab.key)}
                                    >
                                        <Icon size={22} />
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
                        onClick={() => handleTabClick("configuracoes")}
                    >
                        <SettingsIcon size={22} />
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
        </>
    );
}