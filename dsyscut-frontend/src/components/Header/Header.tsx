import style from './header.module.css';

interface HeaderProps {
  userName?: string;
  userAvatar?: string;
  isSidebarCollapsed?: boolean;
  sidebarWidth?: number;
  isMobile?: boolean;
}

export default function Header({ 
  userName = "Usuario", 
  userAvatar, 
  isSidebarCollapsed = false, 
  sidebarWidth = 240,
  isMobile = false
}: HeaderProps) {
  return (
    <header 
      className={style.header}
      style={{
        marginLeft: isMobile ? '0.5rem' : `${sidebarWidth + 16}px`, // sidebar width + 1rem spacing
        width: isMobile ? 'calc(100% - 1rem)' : `calc(100% - ${sidebarWidth + 32}px)`, // account for both side margins
        transition: "margin-left 0.3s ease, width 0.3s ease"
      }}
    >
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
    </header>
  );
}
