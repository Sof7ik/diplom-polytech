import styles from "./header.module.css"
import logo from "/src/assets/react.svg";
import {Link, useNavigate} from "react-router-dom";
import {Avatar, Button, Typography} from "antd";
import { UserOutlined } from "@ant-design/icons";
import {IAuthContext, IUserContext} from "../../context/auth.context.ts";

// import {AuthContext, IAuthContext} from "../../context/auth.context.ts";
// import Breadcrumbs from "../breadcrumbs/Breadcrumbs.tsx";

// function useOnLogoutBtnClicked() {
//     const { setAuthContextState } = useContext(AuthContext);
//     const navigate = useNavigate();
//
//     setAuthContextState({});
//     return navigate("/courses/");
// }

// function choosePersonalText(authContext: IAuthContext): React.ReactNode {
//     console.log("Выбираем что будем рисовать в текст")
//
//     let displayLoggedAs: string = "";
//
//     if (authContext.fio && authContext.fio.length) {
//         displayLoggedAs = authContext.fio;
//     }
//     else if (authContext.email && authContext.email.length) {
//         displayLoggedAs = authContext.email
//     }
//     else {
//         displayLoggedAs = authContext.id;
//     }
//
//     return <Typography.Text> {displayLoggedAs} </Typography.Text>;
// }

function setAuthContextState(authContext: IUserContext): void {
    console.log(authContext);
}

export default function Header() {
    // const {authContextState, setAuthContextState } = useContext(AuthContext);
    const navigate = useNavigate();

    const authContextState = {};


    // const displayLoggedAs = useMemo(
    //     (): ReactNode => {
    //         const { authContextState } = useContext(AuthContext);
    //
    //         // return choosePersonalText(authContextState)
    //     },
    //     []
    // );

    console.log("header.tsx");

    // console.log("header: authContextState", authContextState);

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

                                    Object.keys(authContextState).length < 1 &&
                                    <Link to="/login/" className={styles['header__login']}>
                                        Войти
                                    </Link>
                                }

                                {
                                    // пользователь авторизован

                                    Object.keys(authContextState).length !== 0 &&
                                    <>
                                        <div>
                                            <Typography.Text>
                                                Вы вошли как&ensp;
                                                <Link to="/personal/">
                                                    {"Статичный текст"}
                                                </Link>
                                            </Typography.Text>

                                            <Avatar shape="square" size={30} icon={<UserOutlined />} />
                                        </div>

                                        <div>
                                            <Button type="primary"
                                                    danger={true}
                                                    className={styles['header__login']}
                                                    onClick={() => {
                                                        setAuthContextState({});
                                                        return navigate("/courses/");
                                                    }}>
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