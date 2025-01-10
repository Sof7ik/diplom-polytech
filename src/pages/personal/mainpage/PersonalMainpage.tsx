import {Link} from "react-router-dom";
import {Typography} from "antd";
import {useUserContext} from "../../../components/AuthContextProvider.tsx";
import styles from "./personal-mainpage.module.scss";

interface IMenuItem {
    title: string;
    icon: string;
    link: string;
}

const menuItems: IMenuItem[] = [
    {
        title: "Мой профиль",
        icon: "",
        link: "./profile/"
    }
]

export default function PersonalMainpage() {
    const {fio} = useUserContext();

    return (
        <div className="container">
            <Typography.Title>
                Добро пожаловать в личный кабинет, <b>{fio}</b>
            </Typography.Title>

            <section className={styles["menu-tiles__wrapper"]}>
                <ul className={styles["menu-list"]}>
                    {
                        menuItems.map((item: IMenuItem, idx: number) => {
                            return (<li className={styles["menu-item"]} key={`${idx}_${item.link}`}>
                                <Link to="/personal/profile/">
                                    <img src={item.icon}
                                         alt={item.title}
                                         className={styles["menu-item__icon"]}/>

                                    <span className={styles["menu-item__text"]}>
                                        {item.title}
                                    </span>
                                </Link>
                            </li>)
                        })
                }
            </ul>
            </section>
        </div>
    )
}