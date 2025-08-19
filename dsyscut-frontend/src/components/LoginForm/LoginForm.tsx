import { Card, Form, Button, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { BsEnvelope, BsLock, BsEye, BsEyeSlash } from 'react-icons/bs';
import style from './style.module.css';

const isMobile = window.innerWidth <= 700;

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Card className={`${style.loginCard} ${isMobile ? style.mobileCard : ''}`}>
            <Card.Body>
                <div className={style.logoArea}>
                    <img src="/logo-barbearia.svg" alt="Logo Barbearia" className={style.logoImg} />
                    <h2 className={style.logoSubtitle}>Barbearia PRO</h2>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <BsEnvelope />
                            </InputGroup.Text>
                            <Form.Control type="email" placeholder="Digite seu e-mail" autoComplete="username" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <BsLock />
                            </InputGroup.Text>
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="Digite sua senha"
                                autoComplete="current-password"
                            />
                            <Button
                                variant="outline-secondary"
                                onClick={() => setShowPassword(!showPassword)}
                                tabIndex={-1}
                                className={style.eyeBtn}
                            >
                                {showPassword ? <BsEyeSlash /> : <BsEye />}
                            </Button>
                        </InputGroup>
                    </Form.Group>
                    <div className={style.formOptions}>
                        <Form.Check type="checkbox" label="Lembrar-me" />
                        <Button variant="link" className={style.linkBtn}>Esqueceu a senha?</Button>
                    </div>
                    <Button variant="primary" type="submit" className={style.loginBtn}>
                        Entrar
                    </Button>
                </Form>
            </Card.Body>
            <Card.Footer className={style.cardFooter}>
                <span>Não tem conta?</span>
                <Button variant="link" className={style.linkBtn}>Criar conta</Button>
            </Card.Footer>
        </Card>
    );
}