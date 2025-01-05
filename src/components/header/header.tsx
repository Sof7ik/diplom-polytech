import styles from "./header.module.css"
import logo from "/src/assets/react.svg";
import {Link} from "react-router-dom";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs.tsx";

export default function Header() {
    return (
        <>
            <header>
                <div className={styles.header__wrapper}>
                    <div className="container">
                        <div className={styles.header__inner}>
                            <Link to="/">
                                <img src={logo}
                                     alt="Логотип"
                                     className={styles.header__logo}/>
                            </Link>

                            <nav className={styles.header__menu}>
                                <ul className={styles['header__menu-list']}>
                                    <li>
                                        <Link to="/courses/">Все курсы</Link>
                                    </li>
                                    <li>
                                        <Link to="/about/">О проекте</Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className="header__personal">
                                <Link to="/login/" className={styles['header__login']}> Войти </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className={styles.breadcrumbs}>
                <div className="container">
                    <Breadcrumbs />
                </div>
            </section>
        </>
    )
}