import { Grid, Typography, IconButton } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

interface CabecalhoHomeProps {
    sidebarWidth?: number;
}

export default function cabecalhoHome({ sidebarWidth = 72 }: CabecalhoHomeProps) {

    const date = new Date()
    const mes = date.toLocaleDateString('pt-BR', { month: 'long' })
    const semana = date.getDate()
    const dateFormatted = `${semana}/${mes}`

    const isSidebarOpen = !!sidebarWidth;

    return (
        <>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    width: "100%",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    px: { xs: 2, md: 4 },
                    py: { xs: 1, md: 2 },
                    background: isSidebarOpen
                        ? "var(--color-background-paper)"
                        : "#fff",
                    borderBottom: "1px solid #e0e4ea",
                    boxShadow: isSidebarOpen
                        ? "0 4px 16px 0 rgba(0,0,0,0.08)"
                        : "0 2px 8px 0 rgba(0,0,0,0.04)",
                    borderLeft: isSidebarOpen
                        ? "4px solid var(--color-primary)"
                        : "none",
                    transition: "box-shadow 0.3s, border-left 0.3s, background 0.3s"
                }}
            >
                {/* Esquerda: Nome e Data */}
                <Grid sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            color: "var(--color-primary)",
                            letterSpacing: 0.5,
                            lineHeight: 1.2
                        }}
                    >
                        Gabriel Dias
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "var(--color-text-secondary)",
                            fontWeight: 500
                        }}
                    >
                        {dateFormatted}
                    </Typography>
                </Grid>
                {/* Direita: Sino de Notificação */}
                <Grid>
                    <IconButton
                        color="primary"
                        aria-label="notificações"
                        sx={{
                            width: 44,
                            height: 44,
                            minWidth: 44,
                            minHeight: 44,
                            background: "var(--color-background)",
                            border: "1px solid #e0e4ea",
                            boxShadow: "0 1px 4px 0 rgba(0,0,0,0.06)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "background 0.2s, box-shadow 0.2s",
                            "&:hover": {
                                background: "var(--color-primary-light)",
                                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)"
                            }
                        }}
                    >
                        <NotificationsNoneIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}