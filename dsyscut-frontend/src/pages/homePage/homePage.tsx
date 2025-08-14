import { useState } from "react"
import Sidebar from "../../components/Sidebar/sidebar"
import style from "./style.module.css"

export default function HomePage() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className={style.container}>
            <div className={`${style.sidebar} ${isSidebarCollapsed ? style.sidebarCollapsed : ''}`}>
                <Sidebar 
                    isCollapsed={isSidebarCollapsed}
                    onToggle={handleSidebarToggle}
                />
            </div>

            <div className={`${style.content} ${isSidebarCollapsed ? style.contentExpanded : ''}`}>
                <div className={style.cabecalho}>
                    Home
                </div>
            </div>
        </div>
    )
}