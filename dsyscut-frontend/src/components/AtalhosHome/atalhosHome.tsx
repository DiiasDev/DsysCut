import style from "./style.module.css"
import { Grid, Typography, Card, CardContent } from "@mui/material"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import EventIcon from '@mui/icons-material/Event'
import PersonIcon from '@mui/icons-material/Person'
import BarChartIcon from '@mui/icons-material/BarChart'
import InventoryIcon from '@mui/icons-material/Inventory'
import InfoIcon from '@mui/icons-material/Info'
import { useState, useEffect } from "react"

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

export default function AtalhosHome() {
    const isMobile = useIsMobile()

    const atalhos = [
        {
            id: 1,
            title: "Financeiro",
            atalho: "/financeiro",
            icon: <AttachMoneyIcon className={style.icon} color="primary" fontSize={isMobile ? "medium" : "large"} />
        },
        {
            id: 2,
            title: "Agendamento",
            atalho: "/agendamentos",
            icon: <EventIcon className={style.icon} color="primary" fontSize={isMobile ? "medium" : "large"} />
        },
        {
            id: 3,
            title: "Cliente",
            atalho: "/clientes",
            icon: <PersonIcon className={style.icon} color="primary" fontSize={isMobile ? "medium" : "large"} />
        },
        {
            id: 4,
            title: "Relatório",
            atalho: "/relatorios",
            icon: <BarChartIcon className={style.icon} color="primary" fontSize={isMobile ? "medium" : "large"} />
        },
        {
            id: 5,
            title: "Pacotes",
            atalho: "/pacotes",
            icon: <InventoryIcon className={style.icon} color="primary" fontSize={isMobile ? "medium" : "large"} />
        },
        {
            id: 6,
            title: "Informações",
            atalho: "/info",
            icon: <InfoIcon className={style.icon} color="primary" fontSize={isMobile ? "medium" : "large"} />
        },
    ]

    return (
        <Card className={style.atalhosCardPai} elevation={4} style={{ backgroundColor: 'transparent' }}>
            <CardContent style={{ padding: isMobile ? '16px 8px' : '16px' }}>
                <div
                    style={{
                        display: isMobile ? 'grid' : 'flex',
                        gridTemplateColumns: isMobile ? '1fr 1fr 1fr' : 'none',
                        gridTemplateRows: isMobile ? '1fr 1fr' : 'none',
                        gap: isMobile ? '1rem' : '1.5rem',
                        justifyContent: 'center',
                        padding: isMobile ? '0 0.5rem' : '0'
                    }}
                >
                    {atalhos.map(atalho => (
                        <div 
                            key={atalho.id}
                            style={{ 
                                display: "flex", 
                                justifyContent: "center",
                                flex: isMobile ? 'none' : '1'
                            }}
                        >
                            <a href={atalho.atalho} className={style.link}>
                                <Card className={`${style.atalhoCardSmall} ${isMobile ? style.mobileCard : ''}`} elevation={2}>
                                    <div className={`${style.iconWrapperSmall} ${isMobile ? style.mobileIconWrapper : ''}`}>
                                        {atalho.icon}
                                    </div>
                                    <Typography 
                                        variant={isMobile ? "caption" : "h6"} 
                                        className={`${style.atalhoTitle} ${isMobile ? style.mobileTitleText : ''}`}
                                    >
                                        {atalho.title}
                                    </Typography>
                                </Card>
                            </a>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}