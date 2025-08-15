import style from './header.module.css';
import { useState, useEffect } from 'react';

interface HeaderProps {
  userName?: string;
  userAvatar?: string;
  isSidebarCollapsed?: boolean;
  sidebarWidth?: number;
  isMobile?: boolean;
  onSidebarToggle?: () => void;
}

// Hook para detectar mobile
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])
    return isMobile
}

export default function Header({ 
  userName = "Usuario", 
  userAvatar, 
  isSidebarCollapsed = false, 
  sidebarWidth = 240,
  isMobile = false,
  onSidebarToggle
}: HeaderProps) {
  const isActuallyMobile = useIsMobile();

  return (
    <header 
      className={style.header}
      style={{
        marginLeft: isMobile ? '0' : `${sidebarWidth + 16}px`,
        width: isMobile ? '100%' : `calc(100% - ${sidebarWidth + 32}px)`,
        transition: "margin-left 0.3s ease, width 0.3s ease"
      }}
    >
      {/* Layout para mobile */}
      {isActuallyMobile ? (
        <>
          {/* Menu button à esquerda */}
          {onSidebarToggle && (
            <button
              className={style.mobileMenuButton}
              onClick={onSidebarToggle}
              aria-label="Abrir menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          )}
          
          {/* Sistema nome centralizado */}
          <div className={`${style.headerLeft} ${style.mobileHeaderLeft}`}>
            <h1 className={`${style.systemName} ${style.mobileSystemName}`}>DSysCut</h1>
          </div>
          
          {/* Perfil e notificações à direita */}
          <div className={style.headerRight}>
            <button className={style.notificationButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
              <span className={style.notificationBadge}></span>
            </button>
            
            <div className={style.profileContainer}>
              <img 
                src={userAvatar || "/default-avatar.png"} 
                alt={userName}
                className={style.profileAvatar}
              />
            </div>
          </div>
        </>
      ) : (
        /* Layout para desktop */
        <>
          <div className={style.headerLeft}>
            <h1 className={style.systemName}>DSysCut</h1>
          </div>
          
          <div className={style.headerCenter}>
            <div className={style.searchContainer}>
              <svg className={style.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input 
                type="text" 
                placeholder="Search..." 
                className={style.searchInput}
              />
            </div>
          </div>
          
          <div className={style.headerRight}>
            <button className={style.notificationButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
              <span className={style.notificationBadge}></span>
            </button>
            
            <div className={style.profileContainer}>
              <img 
                src={userAvatar || "/default-avatar.png"} 
                alt={userName}
                className={style.profileAvatar}
              />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
