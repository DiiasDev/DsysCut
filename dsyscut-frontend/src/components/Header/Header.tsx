import style from './header.module.css';
import { useState } from 'react';

export default function Header() {
    const [search, setSearch] = useState('');
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;

    return (
        <header className={style.header}>
            <div
                className={style.headerInner}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: isMobile ? '8px 8px' : '16px 32px',
                }}
            >
                <div
                    className={style.logo}
                    style={{
                        fontWeight: 600,
                        fontSize: isMobile ? 20 : 28,
                        minWidth: isMobile ? 80 : 120,
                    }}
                >
                    DSysCut
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <div
                        className={style.searchContainer}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: isMobile ? 180 : 400,
                            maxWidth: '100%',
                            background: '#232335',
                            borderRadius: 10,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            padding: isMobile ? '2px 8px' : '4px 16px',
                        }}
                    >
                        <span className={style.searchIcon} style={{ marginRight: isMobile ? 4 : 8 }}>
                            {/* ícone de lupa */}
                            <svg width={isMobile ? 16 : 20} height={isMobile ? 16 : 20} fill="none" stroke="#B3B3C5" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </span>
                        <input
                            className={style.searchInput}
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{
                                width: '100%',
                                padding: isMobile ? '6px 6px' : '8px 12px',
                                borderRadius: 8,
                                border: 'none',
                                background: 'transparent',
                                color: '#fff',
                                fontSize: isMobile ? 13 : 16,
                                outline: 'none',
                                transition: 'background 0.2s',
                            }}
                        />
                    </div>
                </div>
                <div
                    className={style.rightSection}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: isMobile ? 10 : 20,
                        padding: isMobile ? '0 2px' : '0 8px',
                    }}
                >
                    <div className={style.notification} style={{ position: 'relative' }}>
                        {/* ícone de sino */}
                        <svg width={isMobile ? 18 : 22} height={isMobile ? 18 : 22} fill="none" stroke="#B3B3C5" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M18 17v-5a6 6 0 10-12 0v5" />
                            <path d="M13.73 21a2 2 0 01-3.46 0" />
                        </svg>
                        <span className={style.badge}></span>
                    </div>
                    <div
                        className={style.avatar}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: isMobile ? 4 : 8,
                            background: 'rgba(35,35,53,0.85)',
                            borderRadius: 20,
                            padding: isMobile ? '2px 6px' : '4px 14px',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                        }}
                    >
                        {/* Avatar do usuário */}
                        <img
                            src="https://i.pravatar.cc/32?img=1"
                            alt="Usuário"
                            style={{
                                borderRadius: '50%',
                                width: isMobile ? 24 : 32,
                                height: isMobile ? 24 : 32,
                                border: '2px solid #2e2e4d',
                            }}
                        />
                        {!isMobile && (
                            <span className={style.username} style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>
                                Usuário
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
