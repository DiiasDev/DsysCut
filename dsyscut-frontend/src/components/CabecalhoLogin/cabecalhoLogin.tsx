import React from "react";
import { Box, Typography } from "@mui/material";
import dsysImage from "../../assets/dsys.png";
import barberShopImage from "../../assets/logoLateral.png";
import style from "./style.module.css"

const LoginHeader: React.FC = () => {
    return (
        <Box className={style.leftPanel}>
            <Box className={style.logoContainer}>
                <img src={dsysImage} alt="Logo DsysCut" className={style.logo} />
                <Typography variant="h4" className={style.brandName}>
                    DsysCut
                </Typography>
            </Box>

            <Box className={style.imagePreview}>
                <img
                    src={barberShopImage}
                    alt="Barber Shop"
                    className={style.barberShopImg}
                    style={{ background: "transparent" }} // Garante fundo transparente
                />
            </Box>

            <Box className={style.textContent}>
                <Typography variant="h3" className={style.mainTitle}>
                    Sistema de Barbearia Moderno
                </Typography>
                <Typography variant="body2" className={style.subDescription}>
                    Bem-vindo ao DsysCut - A solução completa para seu negócio!
                </Typography>
            </Box>

            
        </Box>
    );
};

export default LoginHeader;