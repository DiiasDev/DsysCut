import style from "../../pages/homePage/style.module.css";

export default function HomeHeader() {
    return (
        <header className={style.header}>
            <div className={style.logo}>DsysCut</div>
            <div className={style.profile}>
                <img
                    src="https://i.pravatar.cc/40?img=3"
                    alt="Perfil"
                    className={style.avatar}
                />
                <span className={style.username}>Gabriel</span>
            </div>
        </header>
    );
}
