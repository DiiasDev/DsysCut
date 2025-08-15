import style from "./style.module.css";
import { Card, Typography, LinearProgress, Box } from "@mui/material";

export default function DashboardProgress() {
    const progressData = [
        {
            id: 1,
            title: "Meta Mensal",
            current: 124,
            target: 200,
            percentage: 62,
            color: "#667eea"
        },
        {
            id: 2,
            title: "Satisfação",
            current: 92,
            target: 100,
            percentage: 92,
            color: "#28a745"
        },
        {
            id: 3,
            title: "Eficiência",
            current: 78,
            target: 100,
            percentage: 78,
            color: "#ffc107"
        }
    ];

    return (
        <Card className={style.progressCard} elevation={0}>
            <Typography variant="h6" className={style.cardTitle}>
                Progresso
            </Typography>
            
            <div className={style.progressList}>
                {progressData.map(item => (
                    <div key={item.id} className={style.progressItem}>
                        <div className={style.progressHeader}>
                            <Typography variant="body2" className={style.progressTitle}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" className={style.progressValue}>
                                {item.current}/{item.target}
                            </Typography>
                        </div>
                        
                        <Box className={style.progressBarContainer}>
                            <LinearProgress
                                variant="determinate"
                                value={item.percentage}
                                className={style.progressBar}
                                sx={{
                                    backgroundColor: 'rgba(0,0,0,0.05)',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: item.color,
                                        borderRadius: '4px'
                                    }
                                }}
                            />
                            <Typography variant="caption" className={style.progressPercentage}>
                                {item.percentage}%
                            </Typography>
                        </Box>
                    </div>
                ))}
            </div>
            
            <div className={style.summarySection}>
                <Typography variant="h4" className={style.summaryNumber}>
                    124
                </Typography>
                <Typography variant="body2" className={style.summaryLabel}>
                    Total Horas
                </Typography>
            </div>
        </Card>
    );
}
