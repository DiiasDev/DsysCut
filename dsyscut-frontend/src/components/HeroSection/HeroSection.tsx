import style from "../../pages/homePage/style.module.css";

export default function HeroSection() {
    return (
        <section className={style.heroSection}>
            <div className={style.heroText}>
                <span className={style.heroTag}>Barbearia</span>
                <h1>Seu negócio, sua agenda, seu sucesso.</h1>
                <p>
                    Controle total dos seus horários, clientes e serviços em um painel moderno e fácil de usar.
                </p>
                <button className={style.scheduleButton}>
                    + Agendar novo horário
                </button>
            </div>
            <div className={style.heroImage}>
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Barbearia" />
            </div>
        </section>
    );
}
