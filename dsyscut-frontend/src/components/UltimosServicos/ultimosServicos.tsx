import style from "./style.module.css"
import { Card, Typography, Chip } from "@mui/material"
import ContentCutIcon from '@mui/icons-material/ContentCut'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
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

export default function UltimosServicos() {
    const isMobile = useIsMobile()
    
    const services = [
        {
            id: 1,
            data: "Corte + Barba",
            date: "11 de agosto",
            price: "60,00",
            status: "Concluído",
            client: "João Silva"
        },
        {
            id: 2,
            data: "Corte + Barba + Sobrancelha",
            date: "15 de janeiro",
            price: "80,00",
            status: "Concluído",
            client: "Pedro Santos"
        }
    ]

    return (
        <Card className={style.card} elevation={0}>
            <div className={style.cardHeader}>
                <Typography variant={isMobile ? "subtitle1" : "h6"} className={style.title}>
                    Últimos Serviços
                </Typography>
                <Chip 
                    label="Em Progresso" 
                    size={isMobile ? "medium" : "small"}
                    className={style.statusChip}
                />
            </div>
            
            <div className={style.servicesList}>
                {services.map(service => (
                    <div 
                        key={service.id} 
                        className={style.serviceCard}
                    >
                        <div className={style.serviceIcon}>
                            <ContentCutIcon />
                        </div>
                        
                        <div className={style.serviceInfo}>
                            <Typography 
                                variant={isMobile ? "body2" : "subtitle2"} 
                                className={style.serviceName}
                            >
                                {service.data}
                            </Typography>
                            <Typography 
                                variant="caption" 
                                className={style.clientName}
                            >
                                {service.client}
                            </Typography>
                            <Typography 
                                variant="caption" 
                                className={style.serviceDate}
                            >
                                {service.date}
                            </Typography>
                        </div>
                        
                        <div className={style.serviceActions}>
                            <Typography 
                                variant={isMobile ? "subtitle1" : "h6"} 
                                className={style.price}
                            >
                                R$ {service.price}
                            </Typography>
                            <div className={style.statusContainer}>
                                <CheckCircleIcon className={style.statusIcon} />
                                <Typography variant="caption" className={style.statusText}>
                                    {service.status}
                                </Typography>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <button 
                className={style.viewAllButton}
                style={{ margin: '0 auto', display: 'block', width: isMobile ? '90%' : '60%' }} // centraliza botão
            >
                Ver todos os serviços
            </button>
        </Card>
    )
}