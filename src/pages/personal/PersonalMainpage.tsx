import {Link} from "react-router-dom";
import {Typography} from "antd";

export default function PersonalMainpage() {
    return (
        <div className="container">
            <Typography.Title>
                Добро пожаловать в личный кабинет, <b>Ваше_имя</b>
            </Typography.Title>

            <section className="menu-tiles">
                <ul>
                    <li>
                        <Link to="/personal/profile/">
                            Мой профиль
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}