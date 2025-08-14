import { useState, useEffect } from 'react';
import style from "./style.module.css"

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
    const [activeTab, setActiveTab] = useState('financeiro');
    const [isMobile, setIsMobile] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const navigationItems = [
        {
            id: 'home',
            label: 'Home',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
            )
        },
        {
            id: 'financeiro',
            label: 'Financeiro',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            )
        },
        {
            id: 'agendamentos',
            label: 'Agendamentos',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            )
        },
        {
            id: 'clientes',
            label: 'Clientes',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            id: 'relatorios',
            label: 'Relatórios',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18" />
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                </svg>
            )
        },
        {
            id: 'pacotes',
            label: 'Pacotes',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73L12 2 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27A2 2 0 0 0 21 16z" />
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
            )
        },
        {
            id: 'info',
            label: 'Info',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
            )
        },
    ];

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        // Here you can add logic to apply the theme to your app
        // For example: document.documentElement.setAttribute('data-theme', !isDarkTheme ? 'dark' : 'light');
    };

    return (
        <>
            {/* Mobile backdrop */}
            {isMobile && !isCollapsed && (
                <div 
                    className={style.backdrop}
                    onClick={onToggle}
                />
            )}
            
            <aside
                className={`${style.sidebar} ${isCollapsed ? style.collapsed : ''}`}
                onMouseEnter={(e) => {
                    if (isMobile) return; // Disable hover effects on mobile
                    const toggleBtn = e.currentTarget.querySelector(`.${style.toggleButton}`) as HTMLElement;
                    if (toggleBtn) toggleBtn.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                    if (isMobile) return; // Disable hover effects on mobile
                    const toggleBtn = e.currentTarget.querySelector(`.${style.toggleButton}`) as HTMLElement;
                    if (toggleBtn) toggleBtn.style.opacity = '0';
                }}
            >
                <div className={style.sidebarHeader}>
                    <div className={style.logo}>
                        <div className={style.logoIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9,22 9,12 15,12 15,22" />
                            </svg>
                        </div>
                        {!isCollapsed && <span className={style.logoText}>DSysCut</span>}
                    </div>
                    <button
                        className={style.toggleButton}
                        onClick={onToggle}
                        aria-label={isCollapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
                        style={{
                            opacity: 0,
                            transition: 'opacity 0.3s ease, transform 0.3s ease'
                        }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            style={{ transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                        >
                            <polyline points="15,18 9,12 15,6" />
                        </svg>
                    </button>
                </div>

                <nav className={style.navigation}>
                    <ul className={style.navigationList}>
                        {navigationItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    className={`${style.navigationItem} ${activeTab === item.id ? style.active : ''}`}
                                    onClick={() => setActiveTab(item.id)}
                                    title={isCollapsed ? item.label : undefined}
                            >
                                    <span className={style.navigationIcon}>
                                        {item.icon}
                                    </span>
                                    {!isCollapsed && (
                                        <span className={style.navigationLabel}>
                                            {item.label}
                                        </span>
                                    )}
                                    {activeTab === item.id && <div className={style.activeIndicator} />}
                                </button>
                            </li>
                        ))}
                        
                        {/* Theme Toggle as Navigation Item */}
                        <li>
                            <button
                                className={style.navigationItem}
                                onClick={toggleTheme}
                                title={isCollapsed ? (isDarkTheme ? 'Tema claro' : 'Tema escuro') : undefined}
                            >
                                <span className={style.navigationIcon}>
                                    {isDarkTheme ? (
                                        // Sun icon for dark theme
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="5" />
                                            <line x1="12" y1="1" x2="12" y2="3" />
                                            <line x1="12" y1="21" x2="12" y2="23" />
                                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                            <line x1="1" y1="12" x2="3" y2="12" />
                                            <line x1="21" y1="12" x2="23" y2="12" />
                                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                        </svg>
                                    ) : (
                                        // Moon icon for light theme
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                        </svg>
                                    )}
                                </span>
                                {!isCollapsed && (
                                    <span className={style.navigationLabel}>
                                        {isDarkTheme ? 'Tema claro' : 'Tema escuro'}
                                    </span>
                                )}
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className={style.sidebarFooter}>
                    <div
                        className={`${style.userProfile} ${isCollapsed ? style.userProfileCollapsed : ''}`}
                        style={isCollapsed ? {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            padding: '12px 0'
                        } : {}}
                    >
                        <div
                            className={`${style.userAvatar} ${isCollapsed ? style.userAvatarCollapsed : ''}`}
                            style={isCollapsed ? {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0',
                                width: '40px',
                                height: '40px'
                            } : {}}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        {!isCollapsed && (
                            <div className={style.userInfo}>
                                <span className={style.userName}>Admin</span>
                                <span className={style.userRole}>Administrador</span>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;