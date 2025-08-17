import { useState, useEffect } from "react";
import style from "./style.module.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/sidebar";

export default function HomePage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 600 : false
    );

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 600);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sidebarWidth = sidebarOpen ? 280 : 64;

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <div className={style.wrapper}>
            {/* Sidebar sempre aparece no desktop, no mobile só se aberto */}
            {(!isMobile || sidebarOpen) && (
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            )}
            <div
                className={style.mainContent}
                style={{
                    marginLeft: !isMobile ? sidebarWidth : 0,
                    transition: "margin-left 0.3s",
                    width: '100%',
                }}
            >
                <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            </div>
        </div>
    );
}