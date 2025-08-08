import style from "./style.module.css"
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Divider, Avatar } from "@mui/material";
import FormRegister from "../FormRegister/formRegister";
import { FcGoogle } from 'react-icons/fc';

export default function FormLogin() {
  const [showRegister, setShowRegister] = useState(false);

  if (showRegister) {
    return <FormRegister onSwitchToLogin={() => setShowRegister(false)} />;
  }

  return (
    <Box className={style.rightPanel}>
      <Box className={style.formContainer}>
        <Typography variant="h4" className={style.formTitle}>
          Faça Login
        </Typography>

        <Button
          variant="outlined"
          className={style.googleButton}
          fullWidth
        >
          {React.createElement(FcGoogle as any, { size: 24, style: { marginRight: 8 } })}
          Faça login com o Google
        </Button>

        <Box className={style.dividerContainer}>
          <Divider>
            <Typography variant="body2" color="textSecondary">
              Ou
            </Typography>
          </Divider>
        </Box>

        <Box component="form" className={style.form}>
          <TextField
            label="Seu e-mail"
            type="email"
            variant="outlined"
            fullWidth
            className={style.textField}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            className={style.textField}
          />

          <Button
            variant="contained"
            className={style.registerButton}
            fullWidth
          >
            Entrar
          </Button>

          <Typography variant="body2" className={style.signInText}>
            Não tem uma conta? <span onClick={() => setShowRegister(true)} className={style.link}>Cadastre-se</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}