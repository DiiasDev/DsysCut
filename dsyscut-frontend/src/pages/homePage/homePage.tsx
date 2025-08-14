import { useState } from "react"
import Sidebar from "../../components/Sidebar/sidebar"
import style from "./style.module.css"

export default function HomePage() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <Sidebar 
                        isCollapsed={isSidebarCollapsed}
                        onToggle={handleSidebarToggle}
                    />
                </div>

                <div className="cabecalho">
                    Home
                </div>
            </div>
        </>
    )
}