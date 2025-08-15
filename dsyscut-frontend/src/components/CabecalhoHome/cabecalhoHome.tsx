import { IconButton } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import style from './style.module.css';

interface CabecalhoHomeProps {
    sidebarWidth?: number;
}

export default function cabecalhoHome({ sidebarWidth = 72 }: CabecalhoHomeProps) {

    const date = new Date()
    const mes = date.toLocaleDateString('pt-BR', { month: 'long' })
    const semana = date.getDate()
    const dateFormatted = `${semana}/${mes}`

    const isSidebarExpanded = sidebarWidth > 72;

    return (
        <div className={`${style.cabecalhoContainer} ${isSidebarExpanded ? style.withSidebar : ''}`}>
            {/* Esquerda: Nome e Data */}
            <div className={style.userInfo}>
                <span className={style.userName}>Gabriel Dias</span>
                <span className={style.userDate}>{dateFormatted}</span>
            </div>
            
            {/* Direita: Sino de Notificação */}
            <IconButton
                className={style.notificationButton}
                aria-label="notificações"
            >
                <NotificationsNoneIcon className={style.notificationIcon} />
            </IconButton>
        </div>
    )
}