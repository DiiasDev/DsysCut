import style from "./style.module.css";
import { Card, Typography, Box } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import { useState, useEffect } from "react";

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

export default function DashboardStats() {
    const isMobile = useIsMobile()
    
    const stats = [
        {
            id: 1,
            title: "Receita Mensal",
            value: "R$ 12.500",
            change: "+12%",
            positive: true,
            icon: <AttachMoneyIcon className={style.statIcon} />
        },
        {
            id: 2,
            title: "Clientes Ativos",
            value: "248",
            change: "+8%",
            positive: true,
            icon: <PersonIcon className={style.statIcon} />
        },
        {
            id: 3,
            title: "Agendamentos",
            value: "156",
            change: "+15%",
            positive: true,
            icon: <EventIcon className={style.statIcon} />
        },
        {
            id: 4,
            title: "Performance",
            value: "92%",
            change: "+5%",
            positive: true,
            icon: <TrendingUpIcon className={style.statIcon} />
        }
    ];

    return (
        <div 
            style={{
                display: isMobile ? 'grid' : 'flex',
                gridTemplateColumns: isMobile ? '1fr 1fr' : 'none',
                gridTemplateRows: isMobile ? '1fr 1fr' : 'none',
                gap: isMobile ? '0.75rem' : '1rem',
                width: '100%',
                padding: isMobile ? '0 0.5rem' : '0'
            }}
        >
            {stats.map(stat => (
                <Card 
                    key={stat.id} 
                    className={style.statCard} 
                    elevation={0}
                    style={{
                        minHeight: isMobile ? '120px' : 'auto',
                        flex: isMobile ? 'none' : '1',
                        padding: isMobile ? '0.75rem' : '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                >
                    <div className={style.statHeader}>
                        <div className={style.iconContainer}>
                            {stat.icon}
                        </div>
                        <Typography 
                            variant={isMobile ? "caption" : "body2"} 
                            className={style.statTitle}
                        >
                            {stat.title}
                        </Typography>
                    </div>
                    
                    <Typography 
                        variant={isMobile ? "h6" : "h4"} 
                        className={style.statValue}
                    >
                        {stat.value}
                    </Typography>
                    
                    <Box className={`${style.statChange} ${stat.positive ? style.positive : style.negative}`}>
                        <Typography variant="caption" className={style.changeText}>
                            {stat.change}
                        </Typography>
                    </Box>
                </Card>
            ))}
        </div>
    );
}
