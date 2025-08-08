import React from "react";
import { Box, Typography } from "@mui/material";
import dsysImage from "../../assets/dsys.png";
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

            <Box className={style.dashboardPreview}>
                <Box className={style.mockupContainer}>
                    <Box className={style.mockupScreen}>
                        <Box className={style.mockupHeader}></Box>
                        <Box className={style.mockupContent}>
                            <Box className={style.mockupSidebar}></Box>
                            <Box className={style.mockupMain}>
                                <Box className={style.mockupRow}></Box>
                                <Box className={style.mockupRow}></Box>
                                <Box className={style.mockupRow}></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
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