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
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex-1">
        <div className="flex flex-col w-full mx-auto px-4">
          <WelcomeSection />
          <MainShortcuts />
          <div className="border-b border-[var(--color-border)] mb-8"></div>
          <QuickStats />
          <UpcomingAppointmentsSection />
          <Footer />
        </div>
      </main>
    </>
  );
}