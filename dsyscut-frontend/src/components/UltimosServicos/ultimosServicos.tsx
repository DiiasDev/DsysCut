import style from "./style.module.css"
import { Grid, Card, Typography, Divider, Box, IconButton, Tooltip } from "@mui/material"
import ContentCutIcon from '@mui/icons-material/ContentCut'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

export default function ultimosServicos() {
    const services = [
        {
            id: 1,
            data: "Corte + Barba",
            date: "11 de agosto",
            price: "60,00",
        },
        {
            id: 2,
            data: "Corte + Barba + Sobrancelha",
            date: "15 de janeiro",
            price: "80,00",
        }
    ]

    return (
        <Grid container justifyContent="center" className={style.container} sx={{ mt: { xs: 2, md: 3 } }}>
            <Card className={style.card} elevation={6}>
                <Typography 
                    variant="h4" 
                    className={style.title} 
                    gutterBottom
                    sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                >
                    Últimos Serviços
                </Typography>
                <Divider className={style.headerDivider} />
                <Box className={style.servicesList}>
                    {services.map(service => (
                        <Box key={service.id} className={style.serviceCard}>
                            <Box className={style.iconBox}>
                                <ContentCutIcon className={style.serviceIcon} />
                            </Box>
                            <Box className={style.infoBox}>
                                <Typography variant="subtitle2" className={style.serviceName}>
                                    {service.data}
                                </Typography>
                                <Typography variant="body2" className={style.serviceDate}>
                                    {service.date}
                                </Typography>
                                <Box className={style.priceRow}>
                                    <Typography variant="h5" className={style.price}>
                                        R$ {service.price}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className={style.actionsBox}>
                                <Tooltip title="Ver detalhes">
                                    <IconButton
                                        className={style.detailsBtn}
                                        color="primary"
                                        size="small"
                                    >
                                        <InfoOutlinedIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Card>
        </Grid>
    )
}