import style from "./style.module.css"
import { Grid, Typography, Card } from "@mui/material"
import FinanceiroPage from "../../pages/FinanceiroPage/financeiroPage"

export default function AtalhosHome() {

    const atalhos = [
        {
            id: 1,
            title: "Financeiro",
            atalho: "../../pages/FinanceiroPage/financeiroPage",
            emoji: "💰"
        },
    ]

    return (
        <>
            <Grid>
                {atalhos.map(atalho => (
                    <Grid key={atalho.id}>
                        <a href={atalho.atalho}>
                            <Typography>{atalho.title}</Typography>
                            <Typography>{atalho.emoji}</Typography>
                        </a>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}