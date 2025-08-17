import { useState } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import style from "./style.module.css";
import Header from "../../components/Header/Header";

export default function HomePage() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Define a largura do sidebar para desktop
    const sidebarWidth = sidebarOpen ? 280 : 64;

    return (
        <div className={style.wrapper}>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            <div
                className={style.mainContent}
                style={{
                    marginLeft: sidebarOpen ? 280 : 64,
                    transition: "margin-left 0.3s",
                    width: '100%',
                }}
            >
                <Header/>
            </div>
        </div>
    );
}