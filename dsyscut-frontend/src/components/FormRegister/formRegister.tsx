import style from "./style.module.css"
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import { FcGoogle } from 'react-icons/fc';
import { useRegister } from "../../hooks/useRegister";

interface FormRegisterProps {
  onSwitchToLogin: () => void;
}

export default function FormRegister({ onSwitchToLogin }: FormRegisterProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefone, setTelefone] = useState('');
  const { handleRegister, loading } = useRegister();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await handleRegister(nome, email, password, telefone)
  }
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

        <Box component="form" className={style.form} onSubmit={onSubmit}>
          <TextField
            label="Seu Nome"
            value={nome}
            onChange={event => setNome(event.target.value)}
            type="text"
            variant="outlined"
            fullWidth
            className={style.textField}
          />
          <TextField
            value={email}
            onChange={event => setEmail(event.target.value)}
            label="Seu Email"
            type="email"
            variant="outlined"
            fullWidth
            className={style.textField}
          />
          <TextField
            value={telefone}
            onChange={event => setTelefone(event.target.value)}
            label="Telefone"
            type="text"
            variant="outlined"
            fullWidth
            className={style.textField}
          />
          <TextField
            value={password}
            onChange={event => setPassword(event.target.value)}
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            className={style.textField}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
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