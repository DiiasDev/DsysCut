import style from "./style.module.css"
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Divider, Avatar } from "@mui/material";
import FormRegister from "../FormRegister/formRegister";
import { FcGoogle } from 'react-icons/fc';
import { useLogin } from "../../hooks/useLogin";
import { useAppStore } from "../../store/store";

export default function FormLogin() {
  const setIsLogged = useAppStore(state => state.setIsLogged)
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { handleLogin, loading, error } = useLogin();
  const [formError, setFormError] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFormError(null);

    // Validação simples
    if (!email || !password) {
      setFormError("Preencha e-mail e senha.");
      return;
    }

    const result = await handleLogin(email, password);
    if (!result) {
      setFormError("Usuário ou senha inválidos.");
      return;
    }

    setIsLogged(true);
  }

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

        <Box component="form" onSubmit={onSubmit} className={style.form}>
          <TextField
            value={email}
            onChange={event => setEmail(event.target.value)}
            label="Seu e-mail"
            type="email"
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
            Entrar
          </Button>

          {error && <div>{error}</div>}

          <Typography variant="body2" className={style.signInText}>
            Não tem uma conta? <span onClick={() => setShowRegister(true)} className={style.link}>Cadastre-se</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}