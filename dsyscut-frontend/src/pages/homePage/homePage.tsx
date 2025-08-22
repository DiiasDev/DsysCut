import Header from "../../components/Header/Header";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import MainShortcuts from "../../components/MainShortcuts/MainShortcuts";
import QuickStats from "../../components/QuickStats/QuickStats";
import UpcomingAppointmentsSection from "../../components/UpcomingAppointmentsSection/UpcomingAppointmentsSection";
import Footer from "../../components/Footer/Footer";
import style from "./style.module.css"

export default function HomePage() {
  const userName = "João Dias"; // Exemplo, pode vir do contexto/autenticação

  return (
    <>
      <Header userName={userName} />
      <main
        className="min-h-screen flex-1"
        style={{
          background: "linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-card) 50%, var(--color-bg) 100%)"
        }}
      >
        <div className="flex flex-col w-full mx-auto px-4">
          <WelcomeSection />
          <MainShortcuts />
          <div
            className={style.borderBottom}
            style={{
              borderBottom: "1px solid var(--color-border)",
              marginBottom: "2rem"
            }}
          ></div>
          <QuickStats />
          <UpcomingAppointmentsSection />
          <Footer />
        </div>
      </main>
    </>
  );
}