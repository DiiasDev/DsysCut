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
      {/* Use w-full para ocupar toda a largura disponível e evitar overflow-x */}
      <main className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex-1 overflow-x-hidden">
        <div className="w-full flex flex-col">
          <WelcomeSection />
          <MainShortcuts />
          {/* Separador visual */}
          <div className="w-full border-b border-[var(--color-border)] mb-8 px-4 md:px-8"></div>
          <QuickStats />
          <UpcomingAppointmentsSection />
          <Footer />
        </div>
      </main>
    </>
  );
}