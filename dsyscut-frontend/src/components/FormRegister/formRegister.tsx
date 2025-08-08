import style from "./style.module.css"
import React from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import { FcGoogle } from 'react-icons/fc';

interface FormRegisterProps {
  onSwitchToLogin: () => void;
}

export default function FormRegister({ onSwitchToLogin }: FormRegisterProps) {
  return (
    <Box className={style.rightPanel}>
      <Box className={style.formContainer}>
        <Typography variant="h4" className={style.formTitle}>
          Criar Conta
        </Typography>
        
        <Button
          variant="outlined"
          className={style.googleButton}
          fullWidth
        >
          {/* Cast FcGoogle as any to avoid TS error */}
          {React.createElement(FcGoogle as any, { size: 24, style: { marginRight: 8 } })}
          Cadastrar com o Google
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
            label="Seu Nome"
            type="text"
            variant="outlined"
            fullWidth
            className={style.textField}
          />
          <TextField
            label="Seu Email"
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
          <TextField
            label="Confirmar Senha"
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
            Cadastrar
          </Button>
          
          <Typography variant="body2" className={style.signInText}>
            Já tem uma conta? <span onClick={onSwitchToLogin} className={style.link}>Faça Login</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}