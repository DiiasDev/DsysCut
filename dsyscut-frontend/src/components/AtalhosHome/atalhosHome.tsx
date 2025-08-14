import style from "./style.module.css"
import { Grid, Typography, Card, CardContent } from "@mui/material"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import EventIcon from '@mui/icons-material/Event'
import PersonIcon from '@mui/icons-material/Person'
import BarChartIcon from '@mui/icons-material/BarChart'
import InventoryIcon from '@mui/icons-material/Inventory'
import InfoIcon from '@mui/icons-material/Info'

export default function AtalhosHome() {

    const atalhos = [
        {
            id: 1,
            title: "Financeiro",
            atalho: "../../pages/FinanceiroPage/financeiroPage",
            icon: <AttachMoneyIcon className={style.icon} color="primary" fontSize="large" />
        },
        {
            id: 2,
            title: "Agendamento",
            atalho: "../../pages/AgendamentoPage/agendamentoPage",
            icon: <EventIcon className={style.icon} color="primary" fontSize="large" />
        },
        {
            id: 3,
            title: "Cliente",
            atalho: "../../pages/ClientePage/clientePage",
            icon: <PersonIcon className={style.icon} color="primary" fontSize="large" />
        },
        {
            id: 4,
            title: "Relatório",
            atalho: "../../pages/RelatorioPage/relatorioPage",
            icon: <BarChartIcon className={style.icon} color="primary" fontSize="large" />
        },
        {
            id: 5,
            title: "Pacotes",
            atalho: "../../pages/PacotePage/pacotePage",
            icon: <InventoryIcon className={style.icon} color="primary" fontSize="large" />
        },
        {
            id: 6,
            title: "Informações",
            atalho: "../../pages/InfoPage/infoPage",
            icon: <InfoIcon className={style.icon} color="primary" fontSize="large" />
        },
    ]

    return (
        <Card className={style.atalhosCardPai} elevation={4}>
            <CardContent>
                <Grid container spacing={3} className={style.atalhosContainer} justifyContent="center">
                    {/* Primeira linha: 3 atalhos */}
                    {atalhos.slice(0, 3).map(atalho => (
                        <Grid key={atalho.id} style={{ display: "flex", justifyContent: "center" }}>
                            <a href={atalho.atalho} className={style.link}>
                                <Card className={style.atalhoCardSmall} elevation={2}>
                                    <div className={style.iconWrapperSmall}>
                                        {atalho.icon}
                                    </div>
                                    <Typography variant="h6" className={style.atalhoTitle}>{atalho.title}</Typography>
                                </Card>
                            </a>
                        </Grid>
                    ))}
                </Grid>
                <Grid container spacing={3} className={style.atalhosContainer} justifyContent="center" style={{ marginTop: 16 }}>
                    {/* Segunda linha: 3 atalhos (os 2 últimos centralizados) */}
                    {atalhos.slice(3).map(atalho => (
                        <Grid key={atalho.id} style={{ display: "flex", justifyContent: "center" }}>
                            <a href={atalho.atalho} className={style.link}>
                                <Card className={style.atalhoCardSmall} elevation={2}>
                                    <div className={style.iconWrapperSmall}>
                                        {atalho.icon}
                                    </div>
                                    <Typography variant="h6" className={style.atalhoTitle}>{atalho.title}</Typography>
                                </Card>
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    )
}