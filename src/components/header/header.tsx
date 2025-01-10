import styles from "./header.module.css"
import logo from "/src/assets/react.svg";
import {Link} from "react-router-dom";
import {Avatar, Button, Typography} from "antd";
import { UserOutlined } from "@ant-design/icons";
import {useUserContext} from "../AuthContextProvider.tsx";

export default function Header() {
    const {fio, clearUser } = useUserContext();

    function handleLogout() {
        clearUser();
    }

    console.log("header.tsx");

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
                                {
                                    // пользователь не авторизован

                                    fio === undefined &&
                                    <Link to="/login/" className={styles['header__login']}>
                                        Войти
                                    </Link>
                                }

                                {
                                    // пользователь авторизован

                                    (fio !== undefined && fio.length !== 0) &&
                                    <>
                                        <div>
                                            <Typography.Text>
                                                Вы вошли как&ensp;
                                                <Link to="/personal/">
                                                    {fio}
                                                </Link>
                                            </Typography.Text>

                                            <Avatar shape="square" size={30} icon={<UserOutlined />} />
                                        </div>

                                        <div>
                                            <Button type="primary"
                                                    danger={true}
                                                    className={styles['header__login']}
                                                    onClick={handleLogout}>
                                                Выйти
                                            </Button>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/*<section className={styles.breadcrumbs}>*/}
            {/*    <div className="container">*/}
            {/*        <Breadcrumbs />*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    )
}