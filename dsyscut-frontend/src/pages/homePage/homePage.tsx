import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import UltimosServicos from "../../components/UltimosServicos/ultimosServicos";
import CarrosselSistema from "../../components/carrosselSistema/carrosselSistema";
import AtalhosHome from "../../components/AtalhosHome/atalhosHome";
import DashboardStats from "../../components/DashboardStats/dashboardStats";

export default function HomePage() {
    return (
       <>
       <div className="container">
        <div className="sidebar">
            <Sidebar/>
        </div>
       </div>
       </>
    )
}