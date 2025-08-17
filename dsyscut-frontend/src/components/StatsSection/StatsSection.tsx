import style from "../../pages/homePage/style.module.css";

type Stat = {
    label: string;
    value: number;
};

export default function StatsSection({ stats }: { stats: Stat[] }) {
    return (
        <section className={style.statsSection}>
            {stats.map((stat, idx) => (
                <div key={idx} className={style.statCard}>
                    <span className={style.statValue}>{stat.value}</span>
                    <span className={style.statLabel}>{stat.label}</span>
                </div>
            ))}
        </section>
    );
}
