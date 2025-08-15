import style from "./style.module.css";
import { Card, Typography, Box } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';

export default function DashboardStats() {
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
        <div className={style.statsContainer}>
            {stats.map(stat => (
                <Card key={stat.id} className={style.statCard} elevation={0}>
                    <div className={style.statHeader}>
                        <div className={style.iconContainer}>
                            {stat.icon}
                        </div>
                        <Typography variant="body2" className={style.statTitle}>
                            {stat.title}
                        </Typography>
                    </div>
                    
                    <Typography variant="h4" className={style.statValue}>
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
